/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import { ic_keyboard_arrow_left } from "react-icons-kit/md/ic_keyboard_arrow_left";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { ic_trending_flat } from "react-icons-kit/md/ic_trending_flat";
import Icon from "../Icon";
import { DatePicker } from "../Form";
import { RoundedButton } from "../Button";

const DEFAULT_FORMAT = "D MMM YYYY";

const TimelineNavigationWrapper = styled.div`
  position: relative;
  border-radius: 2em;
  padding: 1em 1em;
  display: inline-block;
  position: relative;
  min-width: 400px;
  text-align: center;
`;

const TimelineNavigationPeriodWrapper = styled.div`
  text-align: center;
`;

const TimelineNavigationPeriod = styled(DatePicker)`
  cursor: pointer;
  display: inline-block;
  box-shadow: none;
  font-size: 1rem;
  border: none !important;
  padding: 0 !important;
  color: rgb(${props => props.theme.form.color}) !important;
  text-shadow: 0 0 0 #222 !important;
  outline: none !important;

  &:focus {
    outline: none !important;
  }

  :hover {
    color: rgb(${props => props.theme.color.primary});
  }
`;

const TimelineNavigationArrow = styled(RoundedButton)`
  position: absolute;
  vertical-align: top;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const TimelineNavigation = ({
  periodStart,
  periodEnd,
  locale,
  // function
  onPeriodChanged
}) => (
  <div style={{ position: "relative", textAlign: "center" }}>
    <TimelineNavigationWrapper>
      <TimelineNavigationPeriodWrapper>
        <div style={{ display: "inline-block" }}>
          <TimelineNavigationPeriod
            locale={locale || null}
            isClearable={false}
            onChange={d =>
              d.isAfter(periodEnd)
                ? onPeriodChanged(d, d)
                : onPeriodChanged(d, periodEnd)
            }
            value={periodStart}
            format={DEFAULT_FORMAT}
            center
          />
        </div>
        &nbsp;
        <Icon icon={ic_trending_flat} />
        &nbsp;
        <div style={{ display: "inline-block" }}>
          <TimelineNavigationPeriod
            locale={locale || null}
            isClearable={false}
            onChange={d =>
              d.isBefore(periodStart)
                ? onPeriodChanged(d, d)
                : onPeriodChanged(periodStart, d)
            }
            value={periodEnd}
            format={DEFAULT_FORMAT}
            center
          />
        </div>
      </TimelineNavigationPeriodWrapper>

      <TimelineNavigationArrow
        style={{ left: "-.8rem" }}
        noMargin
        light
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onPeriodChanged(
            periodStart.subtract(1, "month"),
            periodEnd.subtract(1, "month").endOf("month")
          );
          return false;
        }}
      >
        <Icon size={16} icon={ic_keyboard_arrow_left} />
      </TimelineNavigationArrow>

      <TimelineNavigationArrow
        style={{ right: "-.8rem" }}
        noMargin
        light
        onClick={e => {
          e.preventDefault();
          onPeriodChanged(
            periodStart.add(1, "month"),
            periodEnd.add(1, "month").endOf("month")
          );
          return false;
        }}
      >
        <Icon size={16} icon={ic_keyboard_arrow_right} />
      </TimelineNavigationArrow>
    </TimelineNavigationWrapper>
  </div>
);

export default TimelineNavigation;
