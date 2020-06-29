// using the good dayjs library: https://github.com/iamkun/dayjs
import React from "react";
import styled, { withTheme, css } from "styled-components";
import dayjs from "dayjs";
import map from "lodash/map";
import Tooltip from "../Tooltip";
import Input from "../Input";
import Text from "../Text";
import LeftArrow from "../Icon/LeftArrow";
import RightArrow from "../Icon/RightArrow";
import Close from "../Icon/Close";
import { lighten } from "polished";
import { chooseColor } from "../utils";

// localization
// https://github.com/iamkun/dayjs/blob/master/docs/en/I18n.md
// i5n mode
// import 'dayjs/locale/fr'
// import 'dayjs/locale/de'
// import 'dayjs/locale/it'
// import 'dayjs/locale/es'

const MONTH_VIEW_MODE = 1;
const YEAR_VIEW_MODE = 2;
const DECADES_VIEW_MODE = 3;

const SUNDAY_IDX = 0;
const MONDAY_IDX = 1;
const TUESDAY_IDX = 2;
const WEDNESDAY_IDX = 3;
const THURSDAY_IDX = 4;
const FRIDAY_IDX = 5;
const SATURDAY_IDX = 6;

const CLOSE_ICON_SIZE = 20;

const DEFAULT_FORMAT = "YYYY-MM-DD";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
  min-width: 292px;
  max-width: 300px;
  height: 100%;
  padding: 1.5rem 1.5rem;
  background-color: ${(props) =>
    lighten("0.1", `rgb(${props.theme.form.backgroundColor})`)};
  color: rgb(${(props) => props.theme.form.color});
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`;

const EmptyButtonWrapper = styled.div`
  position: absolute;
  display: inline-block;
  right: 10px;
  top: calc(50% - ${CLOSE_ICON_SIZE / 2}px);
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #cccccc;
  transition: color 0.2s ease;

  :hover {
    color: #222;
  }
`;

const Row = styled.div`
  position: relative;
  display: block;
  margin: 0;
`;

const SelectableItem = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2em;
  cursor: pointer;
  padding: .4em .2em;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;

  :hover {
    background-color: ${(props) =>
      `rgb(${props.theme.color.light})` || `#f9f9f9`}
  }

  ${(props) =>
    props.small &&
    css`
      padding: 0.4em 0.1em;
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: initial;
      :hover {
        background-color: inherit !important;
      }
    `}

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => `rgb(${props.theme.color.primary})`};
      color: ${chooseColor(
        props.theme.color.primary,
        "255,255,255",
        props.theme.color.dark
      )};
      :hover {
        background-color: ${(props) => `rgb(${props.theme.color.primary})`};
      }
    `}
  
`;

const YearWrapper = styled(SelectableItem)`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
  color: ${(props) => lighten("0.3", `rgb(${props.theme.form.color})`)};
`;

const Days = styled.div`
  position: relative;
  display: block;
  padding: 0.5em 0;
`;

const Months = styled.div`
  position: relative;
  width: 100%;
  display: block;
  padding: 0.5em 0;
`;

const Month = styled(SelectableItem)`
  display: inline-block;
  width: 32%;
  max-width: 32%;
  padding-top: 1.8em;
  padding-bottom: 1.8em;
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
`;

const Year = styled(Month)``;

const Week = styled.div`
  position: relative;
  display: block;
  padding: 0.15em 0;
`;

const Day = styled(SelectableItem)`
  width: 2em;
  max-width: 2em;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;

const WeekDay = styled(Text)`
  font-size: 0.7em;
  padding: 1em 0.65em 0 0.65em;
  cursor: unset;
  color: ${(props) => lighten("0.3", `rgb(${props.theme.form.color})`)};
`;

const daysInMonth = (currentDate, startDay) => {
  const firstDateInMonth = currentDate.startOf("month");
  const firstDayInTheMonth = firstDateInMonth.day();
  const nbDaysInMonth = currentDate.daysInMonth();
  // [ Sun, Mon, Tue, Wed, Thu, Fri, Sat ]
  // [ 0, 1, 2, 3, 4, 5, 6 ]
  // iterate through weeks
  let dayCounter = 1;
  let daysToReturn = [];
  let firstWeek = true;
  let currentDateAsObject = firstDateInMonth;

  while (dayCounter < nbDaysInMonth) {
    let days = [null, null, null, null, null, null, null];
    let currentStartDay = firstWeek
      ? startDay > firstDayInTheMonth
        ? 7 - startDay + firstDayInTheMonth
        : firstDayInTheMonth - startDay
      : 0;
    // iterate through days in week
    for (
      let d = currentStartDay;
      d < days.length && dayCounter <= nbDaysInMonth;
      d++
    ) {
      days[d] = currentDateAsObject;
      dayCounter++;
      currentDateAsObject = currentDateAsObject.add(1, "day");
    }
    firstWeek = false;
    daysToReturn = [...daysToReturn, days];
  }
  return daysToReturn;
};

const monthsInYear = (currentDate) => {
  let currentDateInYear = currentDate.startOf("year");
  let monthsToReturn = [];
  for (let d = 0; d < 12; d++) {
    monthsToReturn[d] = currentDateInYear;
    currentDateInYear = currentDateInYear.add(1, "month");
  }
  return monthsToReturn;
};

const getClosestYears = (currentDate) => {
  return [
    currentDate.subtract(3, "year"),
    currentDate.subtract(2, "year"),
    currentDate.subtract(1, "year"),
    currentDate,
    currentDate.add(1, "year"),
    currentDate.add(2, "year"),
    currentDate.add(3, "year"),
  ];
};

const getWeekDays = (monthStartWeekDay, format) => {
  let currentDate = dayjs("2018-07-01").add(monthStartWeekDay, "day"); // sunday = 0
  let returnedWeekDays = [];
  for (let i = 0; i < 7; i++) {
    returnedWeekDays = [...returnedWeekDays, format(currentDate, "ddd")];
    currentDate = currentDate.add(1, "day");
  }

  return returnedWeekDays;
};

const DaysGrid = React.memo(
  ({ name, currentDate, value, monthStartDay, theme, onSelectDay }) => (
    <Days>
      {map(daysInMonth(currentDate, monthStartDay), (week, weekIndex) => (
        <Week key={`${name}-week-${weekIndex}`}>
          {map(week, (day, dayIndex) => (
            <Day
              onClick={(e) => onSelectDay(day)}
              selected={
                day !== null &&
                day.date() === value.date() &&
                day.month() === value.month() &&
                day.year() === value.year()
              }
              disabled={day === null}
              small
              theme={theme}
              key={`${name}-days-${dayIndex}`}
            >
              {day != null && day.date()}
            </Day>
          ))}
        </Week>
      ))}
    </Days>
  )
);

const MonthGrid = React.memo(
  ({ name, currentDate, value, theme, onSelectMonth, format }) => (
    <Months>
      {map(monthsInYear(currentDate), (month, monthIndex) => (
        <Month
          onClick={(e) => {
            e.preventDefault();
            onSelectMonth(month);
          }}
          selected={month !== null && month.month() === value.month()}
          disabled={month === null}
          small
          theme={theme}
          key={`${name}-months-${monthIndex}`}
        >
          <Text uppercase light spaced small>
            {month !== null && format(month, "MMMM")}
          </Text>
        </Month>
      ))}
    </Months>
  )
);

const MonthView = (props) => (
  <Wrapper theme={props.theme}>
    <Row>
      <SelectableItem
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.setCurrentDate(props.currentDate.subtract(1, "month"));
        }}
        theme={props.theme}
      >
        <LeftArrow style={{ pointerEvents: "none" }} size={22} />
      </SelectableItem>
      <SelectableItem
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.onSelectMonth();
        }}
        theme={props.theme}
        style={{ minWidth: "12em" }}
      >
        <Text uppercase light spaced>
          {props.format(props.currentDate, "MMMM")}
        </Text>
      </SelectableItem>
      <SelectableItem
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.setCurrentDate(props.currentDate.add(1, "month"));
        }}
        theme={props.theme}
      >
        <RightArrow style={{ pointerEvents: "none" }} size={22} />
      </SelectableItem>
    </Row>

    <Row>
      <YearWrapper
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.onSelectYear();
        }}
        theme={props.theme}
      >
        <Text spaced small bold>
          {props.currentDate.year()}
        </Text>
      </YearWrapper>
    </Row>

    <Row>
      {map(
        getWeekDays(props.monthStartDay, props.format),
        (weekDay, weekDayIndex) => (
          <WeekDay
            key={`${props.name}-weekDay-${weekDayIndex}`}
            theme={props.theme}
            uppercase
            inline
          >
            {weekDay}
          </WeekDay>
        )
      )}
    </Row>

    <DaysGrid
      onSelectDay={(d) => props.onSelectDay(d)}
      currentDate={props.currentDate}
      value={props.value}
      name={props.name}
      monthStartDay={props.monthStartDay}
      theme={props.theme}
    />
  </Wrapper>
);

const YearView = (props) => (
  <Wrapper theme={props.theme}>
    <MonthGrid
      format={props.format}
      onSelectMonth={(d) => props.onSelectMonth(d)}
      currentDate={props.currentDate}
      value={props.value}
      name={props.name}
      theme={props.theme}
    />
  </Wrapper>
);

const DecadeView = (props) => (
  <Wrapper theme={props.theme}>
    <Row>
      <Year
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.setCurrentDate(props.currentDate.subtract(1, "year"));
        }}
        theme={props.theme}
      >
        <LeftArrow style={{ pointerEvents: "none" }} size={22} />
      </Year>

      {map(getClosestYears(props.currentDate), (year, yearIndex) => (
        <Year
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.onSelectYear(year);
          }}
          selected={year !== null && year.year() === props.value.year()}
          disabled={year === null}
          small
          theme={props.theme}
          key={`${props.name}-year-${yearIndex}`}
        >
          <Text uppercase light spaced small>
            {year !== null && year.year()}
          </Text>
        </Year>
      ))}

      <Year
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.setCurrentDate(props.currentDate.add(1, "year"));
        }}
        theme={props.theme}
      >
        <RightArrow style={{ pointerEvents: "none" }} size={22} />
      </Year>
    </Row>
  </Wrapper>
);

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    const value = props.value ? dayjs(props.value) : dayjs();
    this.state = {
      viewMode: props.viewMode || MONTH_VIEW_MODE,
      currentDate: value.startOf("month"),
      monthStartDay: props.monthStartDay || SUNDAY_IDX,
      open: false,
      doNotClose: false,
      loadedLocale: null,
    };
    this.setCurrentDate = this.setCurrentDate.bind(this);
    this.selectDay = this.selectDay.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
    this.selectYear = this.selectYear.bind(this);
    this.emptyValue = this.emptyValue.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onClose = this.onClose.bind(this);
    this.reset = this.reset.bind(this);
    this.format = this.format.bind(this);
  }

  componentDidMount() {
    if (this.props.locale) this.loadLocalization(this.props.locale);
  }

  componentDidUpdate(prevProps) {
    if (this.props.locale && this.props.locale !== prevProps.locale) {
      this.loadLocalization(this.props.locale);
    }
  }

  loadLocalization(locale) {
    import(`dayjs/locale/${locale}.js`).then(() =>
      this.setState({ loadedLocale: locale })
    );
  }

  openView(viewMode) {
    this.setState({ viewMode, doNotClose: true });
  }

  open(e) {
    if (e) e.preventDefault();
    this.setState({ open: true });
  }

  close(e) {
    if (e) e.preventDefault();
    this.setState({ open: false }, this.reset);
  }

  reset() {
    const value = this.props.value ? dayjs(this.props.value) : dayjs();
    this.setState({
      viewMode: MONTH_VIEW_MODE,
      currentDate: value.startOf("month"),
    });
  }

  onClose() {
    const { doNotClose } = this.state;
    if (!doNotClose) this.close();
    else this.setState({ doNotClose: false });
  }

  setCurrentDate(d) {
    this.setState({ currentDate: d });
  }

  selectDay(d) {
    this.setState({ currentDate: d });
    if (this.props.onChange) this.props.onChange(d);
  }

  selectMonth(d) {
    this.setCurrentDate(d);
    this.openView(MONTH_VIEW_MODE);
  }

  selectYear(d) {
    this.setCurrentDate(d);
    this.openView(MONTH_VIEW_MODE);
  }

  emptyValue(e) {
    if (e) e.preventDefault();
    this.setState({
      currentDate: dayjs(),
      doNotClose: true,
    });
    if (this.props.onChange) this.props.onChange(null);
  }

  format(d, f) {
    try {
      if (this.state.loadedLocale)
        return d.locale(this.state.loadedLocale).format(f);
      return d.format(f);
    } catch (e) {
      return d.format(f);
    }
  }

  render() {
    const { viewMode, currentDate, monthStartDay, open } = this.state;
    const {
      theme,
      name,
      value,
      format,
      isClearable,
      ...otherProps
    } = this.props;
    const _name = name || "react-ratel-calendar";
    const parsedValue = value ? dayjs(value) : dayjs();

    return (
      <Tooltip
        appendTo={() => document.body}
        onHide={this.onClose}
        open={open}
        interactive={true}
        trigger="click"
        placement="bottom"
        onShown={(e) => this.setState({ open: true })}
        html={
          <React.Fragment>
            {viewMode === MONTH_VIEW_MODE && (
              <MonthView
                format={this.format}
                onSelectYear={() => this.openView(DECADES_VIEW_MODE)}
                onSelectMonth={() => this.openView(YEAR_VIEW_MODE)}
                onSelectDay={this.selectDay}
                setCurrentDate={this.setCurrentDate}
                monthStartDay={monthStartDay}
                value={parsedValue}
                currentDate={currentDate}
                theme={theme}
                name={_name}
              />
            )}
            {viewMode === YEAR_VIEW_MODE && (
              <YearView
                format={this.format}
                onSelectMonth={this.selectMonth}
                value={parsedValue}
                currentDate={currentDate}
                theme={theme}
                name={_name}
              />
            )}
            {viewMode === DECADES_VIEW_MODE && (
              <DecadeView
                format={this.format}
                onSelectYear={this.selectYear}
                setCurrentDate={this.setCurrentDate}
                value={parsedValue}
                currentDate={currentDate}
                theme={theme}
                name={_name}
              />
            )}
          </React.Fragment>
        }
      >
        <InputWrapper>
          <Input
            onClick={this.open}
            onFocus={this.open}
            value={
              (value &&
                parsedValue &&
                this.format(parsedValue, format || DEFAULT_FORMAT)) ||
              ""
            }
            {...otherProps}
          />
          {value && isClearable !== false && (
            <EmptyButtonWrapper>
              <Close
                onClick={this.emptyValue}
                size={CLOSE_ICON_SIZE}
                style={{ color: `rgb(${theme.form.color})` }}
              />
            </EmptyButtonWrapper>
          )}
        </InputWrapper>
      </Tooltip>
    );
  }
}

export default withTheme(DatePicker);
