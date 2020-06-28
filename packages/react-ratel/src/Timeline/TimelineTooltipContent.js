/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import reduce from 'lodash/reduce'
import get from 'lodash/get'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

dayjs.extend(isBetween)

const TimelineTooltipContent = ({
  name,
  date,
  data,
  keys,
  getDataStartDate,
  getDataEndDate,
  getDataValue,
  renderTooltipValues,
  format
}) => {
  if (date === null) return null

  const values = reduce(data, (result, items, key) => {
    const indexKey = get(keys, `[${key}]`)
    const dates = reduce(items, (res, item) => {
      const startDate = getDataStartDate(item) === null ? null : dayjs(getDataStartDate(item))
      const endDate = getDataEndDate(item) === null ? null : dayjs(getDataEndDate(item))
      const isValid = startDate !== null && endDate !== null ? date.isBetween(startDate, endDate) || date.isSame(startDate) || date.isSame(endDate) : (startDate === null && endDate !== null ? date.isBefore(endDate) || date.isSame(endDate) : (startDate !== null && endDate === null ? date.isAfter(startDate) || date.isSame(startDate) : true))

      if (isValid) res.push(item)
      return res
    }, [])

    if (!isEmpty(dates)) result[indexKey || key] = dates
    return result
  }, {})

  if (isEmpty(values)) return null

  return (
    <React.Fragment>
      <div style={{ fontSize: '.7em', color: '#ccc' }}>{date !== null && format(date, 'D MMM YYYY')}</div>
      {renderTooltipValues && renderTooltipValues(values)}
      {!renderTooltipValues && map(values, (items, key) => (
        <p key={`${name}-tooltip-${key}`}>
          {key}: {map(items, (item, kk) => getDataValue(item)).join(', ')}
        </p>
      ))}
    </React.Fragment>
  )
}

export default TimelineTooltipContent
