/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const TimeWrapper = styled.div`
    position: relative;
    height: 1px;
    width:100%;
    border-bottom: 1px solid #ccc;
`

const TimeFrameValue = styled.div.attrs(props => ({
  style: {
    left: `${props.x}%`
  }
}))`
  position: relative;
`

const TimeFrameValueText = styled.div`
  position: absolute;
  font-size: .6em;
  top: -1.8em;
  transform: translateX(-50%);

  :before {
      content: '';
      position: absolute;
      width: 1px;
      height: 6px;
      bottom: -.8em;
      left: 50%;
      background-color: #ccc;
  }
`

const TimelineTimeFrame = ({
  periodStart,
  periodEnd,
  format
}) => {
  return (
    <TimeWrapper>
      {/* start */}
      <TimeFrameValue x={0}><TimeFrameValueText>{format(periodStart, 'D MMM YYYY')}</TimeFrameValueText></TimeFrameValue>
      {/* end */}
      <TimeFrameValue x={100}><TimeFrameValueText>{format(periodEnd, 'D MMM YYYY')}</TimeFrameValueText></TimeFrameValue>
    </TimeWrapper>
  )
}

export default TimelineTimeFrame
