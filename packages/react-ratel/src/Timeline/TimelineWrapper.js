/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import map from "lodash/map";
import get from "lodash/get";
import { Row, Col } from "../Layout";
import TimelineLine from "./TimelineLine";
import TimelinePositionWatcher from "./TimelinePositionWatcher";
import TimelineTimeFrame from "./TimelineTimeFrame";
import TimelineTooltipContent from "./TimelineTooltipContent";

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1em;
  border-radius: 1em;
  overflow: hidden;
  text-align: left !important;
  box-shadow: none;
  padding: 0 0 0 0;
`;

const TimelineInnerLayer = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 0;
  margin-bottom: 1.5em;
`;

const TimelineGroup = styled.div`
  position: relative;
  width: 100%;
  padding: 2em 0 1em 0;
  margin: 2.5em 0;
  border: 1px dashed #ccc;
  border-radius: 1em;
  border-top-left-radius: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineGroupHeader = styled.p`
  position: absolute;
  margin: 0 !important;
  border: 1px dashed #ccc;
  color: #ccc;
  border-bottom: none;
  border-radius: 1em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: 0;
  left: -1px;
  font-size: 0.8em;
  transform: translateY(-100%);
  padding: 0.3em 0.6em;
`;

class TimelineWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedDate: null
    };
  }

  render() {
    const {
      periodStart,
      periodEnd,
      data,
      keys,
      name,
      getDataStartDate,
      getDataEndDate,
      getDataValue,
      onSelect,
      getLineStyle,
      renderTooltipValues,
      format,
      showGroupHeader
    } = this.props;

    const { watchedDate } = this.state;

    return (
      <TimelineContainer>
        {/*
        <TimelineTimeFrame
          format={format}
          periodStart={periodStart}
          periodEnd={periodEnd}
        /> */}

        <TimelinePositionWatcher
          periodStart={periodStart}
          periodEnd={periodEnd}
          onDateChanged={d => this.setState({ watchedDate: d })}
          tooltipContent={
            <TimelineTooltipContent
              name={name}
              date={watchedDate}
              data={data}
              keys={keys}
              getDataStartDate={getDataStartDate}
              getDataEndDate={getDataEndDate}
              getDataValue={getDataValue}
              renderTooltipValues={renderTooltipValues}
              format={format}
            />
          }
        >
          {map(data, (collection, j) => (
            <Row key={`timeline-${name}-${j}`} style={{ margin: 0 }}>
              <Col col style={{ padding: 0 }}>
                <TimelineGroup>
                  {showGroupHeader && (
                    <TimelineGroupHeader>
                      {get(keys, `[${j}]`, null) || `${j}`}
                    </TimelineGroupHeader>
                  )}
                  {map(collection, (item, k) => (
                    <TimelineInnerLayer key={`timeline-${name}-${j}-${k}`}>
                      <TimelineLine
                        periodStart={periodStart}
                        periodEnd={periodEnd}
                        item={item}
                        getDataStartDate={getDataStartDate}
                        getDataEndDate={getDataEndDate}
                        getDataValue={getDataValue}
                        onClick={it => onSelect(it, get(keys, `[${j}]`, j))}
                        lineStyle={
                          getLineStyle
                            ? getLineStyle(item, get(keys, `[${j}]`, j))
                            : {}
                        }
                        format={format}
                      />
                    </TimelineInnerLayer>
                  ))}
                </TimelineGroup>
              </Col>
            </Row>
          ))}
        </TimelinePositionWatcher>
      </TimelineContainer>
    );
  }
}

export default TimelineWrapper;
