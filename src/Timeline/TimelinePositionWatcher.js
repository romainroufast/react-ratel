/* eslint-disable react/prop-types */
import React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

const TimelinePositionWatcherContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`

const TimelineWatcherBar = styled.div.attrs(props => ({
  style: { left: `${props.x}px` }
}))`
  position: absolute;
  display: inline-block;
  height: 100%;
  top: 0;
  width: 1px;
  background-color: red;  
`

const TimelineWatcherValue = styled.div.attrs(props => ({
  style: {
    left: `${props.percentPosition}%`,
    transform: `${props.percentPosition > 90 ? 'translateX(-100%)' : (props.percentPosition < 10 ? 'translateX(3%)' : 'translateX(-50%)')}`
  }
}))`
  position: absolute;
  display: inline-block;
  top: 0em;
  color: red;
  transition: transform .2s ease;
  background-color: #fff;
  min-width: 6em;
  text-align: center;
  font-size: 10px;
`

const TimelineTooltip = styled.div.attrs(props => ({
  style: {
    left: `${props.x}px`,
    top: `${props.y}px`,
    transform: `${props.percentPosition > 50 ? 'translateX(-100%)' : 'none'}`
  }
}))`
  position: fixed;
  padding: 1em;
  margin-left: 2em;
  margin-top: 20px;
  transition: transform .2s ease;
  background-color: #fff;
  box-shadow: rgba(32, 33, 36, 0.28) 0px 1px 6px 0px;
  border-radius: 1em;
`

class TimelinePositionWatcher extends React.Component {
  constructor(props) {
    super(props)
    this.element = null
    this.state = {
      x: null,
      y: null,
      globalX: null,
      globalY: null,
      percentPosition: null,
      currentWatcherDate: null
    }
    this.mouseMoved = this.mouseMoved.bind(this)
  }

  componentDidMount() {
    this.element = findDOMNode(this)
  }

  mouseMoved(e) {
    const rect = this.element.getBoundingClientRect()
    const x = e.clientX - rect.left || 0
    const y = e.clientY - rect.top || 0
    const percentPosition = 100 * (e.clientX - rect.left || 0) / rect.width
    const currentWatcherDate = x === null || percentPosition === null ? null : this.props.periodStart.add(Math.floor(this.props.periodEnd.diff(this.props.periodStart, 'day') * percentPosition / 100), 'day')

    this.setState({
      x,
      y,
      globalX: e.clientX,
      globalY: e.clientY,
      percentPosition,
      currentWatcherDate
    })

    if (this.props.onDateChanged) this.props.onDateChanged(currentWatcherDate)
  }

  reset() {
    this.setState({
      x: null,
      y: null,
      globalX: null,
      globalY: null,
      percentPosition: null,
      currentWatcherDate: null
    })
  }

  render() {
    const { x, globalX, globalY, percentPosition, currentWatcherDate } = this.state

    const { tooltipContent } = this.props

    return (
      <TimelinePositionWatcherContainer
        onMouseMove={this.mouseMoved}
        onMouseLeave={e => this.reset()}
      >
        {x !== null && <TimelineWatcherBar x={x} />}
        {currentWatcherDate !== null && <TimelineWatcherValue percentPosition={percentPosition}>{currentWatcherDate.format('D MMM YYYY')}</TimelineWatcherValue>}
        {this.props.children}
        {currentWatcherDate !== null && tooltipContent && (
          <TimelineTooltip
            x={globalX}
            y={globalY}
            percentPosition={percentPosition}
          >
            { tooltipContent }
          </TimelineTooltip>
        )}
      </TimelinePositionWatcherContainer>
    )
  }
}

export default TimelinePositionWatcher
