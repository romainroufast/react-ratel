/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import styled, { css } from 'styled-components'
import dayjs from 'dayjs'

const LINE_HEIGHT = '5px'

const Line = styled.div.attrs(props => ({
  style: Object.assign({}, {
    left: `${props.startPositionPercent === null ? `0` : `${props.startPositionPercent}%`}`,
    width: `${props.widthPercent === null ? `calc(100% - ${props.startPositionPercent ? props.startPositionPercent + '%' : '0px'})` : `${props.widthPercent}%`}`
  }, props.lineStyle || {})
}))`
    position: relative;
    display: inline-block;
    border-radius: 2em;
    height: ${LINE_HEIGHT};
    cursor: pointer;

    ${props => props.startPositionPercent === null && css`
    :before {
        content: '';
        position: absolute;
        left: 0;
        height: ${LINE_HEIGHT};
        border-right: 3px solid #fff;
        width: 8px;
        background-color: inherit;
    }
    `}

    ${props => props.widthPercent === null && css`
    :after {
        content: '';
        position: absolute;
        right: 0;
        height: ${LINE_HEIGHT};
        border-left: 3px solid #fff;
        width: 8px;
        background-color: inherit;
    }
    `}

    transition: all .2s linear;

    background-color: rgb(${props => props.theme.color.primary});
`

const LineContainer = styled.div`
    position: relative;
    width: 100%;
`

const FloatingArea = styled.span`
    position: absolute;
    padding: .3em;
    border-radius: 3px;
    font-size: .5em;
    background-color: #fff;
    top: ${`${LINE_HEIGHT}`};
`

const StartPeriodIdentifier = styled(FloatingArea)`
    left: ${props => props.startPositionPercent === null ? `16px` : `0`};
`

const EndPeriodIdentifier = styled(FloatingArea)`
    right: ${props => props.widthPercent === null ? `16px` : `0`};
`

const ValueIdentifier = styled(FloatingArea)`
    padding: .3em .5em;
    left: 50%;
    // top: ${`-2em`};
    transform: translateX(-50%) translateY(-170%);
    font-size: .65em;
    font-weight: bold;
    box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;
`

const TimelineLine = ({
  periodStart,
  periodEnd,
  item,
  getDataStartDate,
  getDataEndDate,
  getDataValue,
  onClick,
  lineStyle,
  format
}) => {
  let parsedStartDate = getDataStartDate(item) === null ? null : dayjs(getDataStartDate(item))
  let parsedEndDate = getDataEndDate(item) === null ? null : dayjs(getDataEndDate(item))

  if (parsedStartDate !== null) {
    if (parsedStartDate.isAfter(periodEnd)) return null
    else if (parsedStartDate.isBefore(periodStart)) parsedStartDate = null
  }

  if (parsedEndDate !== null) {
    if (parsedEndDate.isBefore(periodStart)) return null
    else if (parsedEndDate.isAfter(periodEnd)) parsedEndDate = null
  }

  const startPositionPercent = parsedStartDate === null || parsedStartDate.isBefore(periodStart) ? null : 100 * (parsedStartDate.unix() - periodStart.unix()) / (periodEnd.unix() - periodStart.unix())
  let widthPercent = parsedEndDate === null || parsedEndDate.isAfter(periodEnd) ? null : 100 * ((parsedEndDate.diff(parsedStartDate || periodStart, 'day') + 1) / (periodEnd.diff(periodStart, 'day')))
  const value = getDataValue(item)

  // hotfix wrong calculation
  if ((widthPercent || 0) + (startPositionPercent || 0) > 100) widthPercent = 100 - startPositionPercent

  return (
    <LineContainer>
      <Line
        style={lineStyle}
        startPositionPercent={startPositionPercent}
        widthPercent={widthPercent}
        onClick={e => onClick && onClick(item)}
      >
        {parsedStartDate !== null && startPositionPercent != null && (
          <StartPeriodIdentifier startPositionPercent={startPositionPercent}>{format(parsedStartDate, 'D MMM')}</StartPeriodIdentifier>
        )}
        {parsedEndDate !== null && widthPercent !== null && (
          <EndPeriodIdentifier widthPercent={widthPercent}>{format(parsedEndDate, 'D MMM')}</EndPeriodIdentifier>
        )}
        <ValueIdentifier>{value}</ValueIdentifier>
      </Line>
    </LineContainer>
  )
}

export default React.memo(TimelineLine, (prevProps, nextProps) => prevProps.periodStart === nextProps.periodStart && prevProps.periodEnd === nextProps.periodEnd && prevProps.item === nextProps.item)
