/* eslint-disable react/prop-types */
import React from 'react'
import TimelineNavigation from './TimelineNavigation'
import dayjs from 'dayjs'
import TimelineWrapper from './TimelineWrapper'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      periodStart: dayjs(props.periodStart),
      periodEnd: dayjs(props.periodEnd),
      loadedLocale: null
    }
    this.onPeriodChanged = this.onPeriodChanged.bind(this)
    this.format = this.format.bind(this)
  }

  componentDidMount() {
    if (this.props.locale) this.loadLocalization(this.props.locale)
  }

  componentDidUpdate(prevProps) {
    if (this.props.locale && this.props.locale !== prevProps.locale) {
      this.loadLocalization(this.props.locale)
    }
    if (this.props.periodStart && this.props.locale !== prevProps.locale) {
      this.loadLocalization(this.props.locale)
    }
  }

  loadLocalization(locale) {
    import(`dayjs/locale/${locale}`).then(() => this.setState({ loadedLocale: locale }))
  }

  onPeriodChanged(newPeriodStart, newPeriodEnd) {
    this.props.onPeriodChanged && this.props.onPeriodChanged(newPeriodStart, newPeriodEnd)
  }

  format(d, f) {
    try {
      if (this.state.loadedLocale) return d.locale(this.state.loadedLocale).format(f)
      return d.format(f)
    } catch (e) {
      return d.format(f)
    }
  }

  render() {
    const { locale,
      getDataStartDate,
      getDataEndDate,
      getDataValue,
      periodStart,
      periodEnd,
      keys,
      data,
      name,
      showTimeWatcher,
      onSelect,
      getLineStyle,
      renderTooltipValues,
      showGroupHeader
    } = this.props

    return (
      <React.Fragment>

        <TimelineNavigation
          periodStart={dayjs.isDayjs(periodStart) ? periodStart : dayjs(periodStart)}
          periodEnd={dayjs.isDayjs(periodEnd) ? periodEnd : dayjs(periodEnd)}
          locale={locale}
          format={this.format}
          onPeriodChanged={(newPeriodStart, newPeriodEnd) => this.onPeriodChanged(newPeriodStart, newPeriodEnd)}
        />

        <TimelineWrapper
          locale={locale}
          format={this.format}
          periodStart={dayjs.isDayjs(periodStart) ? periodStart : dayjs(periodStart)}
          periodEnd={dayjs.isDayjs(periodEnd) ? periodEnd : dayjs(periodEnd)}
          keys={keys}
          data={data}
          name={name}
          getDataStartDate={getDataStartDate}
          getDataEndDate={getDataEndDate}
          getDataValue={getDataValue}
          showTimeWatcher={showTimeWatcher}
          onSelect={onSelect}
          getLineStyle={getLineStyle}
          renderTooltipValues={renderTooltipValues}
          showGroupHeader={showGroupHeader === false ? false : true}
        />

      </React.Fragment>
    )
  }
}

export default Timeline
