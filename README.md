# react-ratel

> React components library (datepicker, tooltip, popover, select...). Just wrappers around some famous libraries.

## Install

```bash
yarn add react-ratel
```

## Usage

```jsx
import React, { Component } from "react";
import ThemeProvider from "@react-ratel/core/ThemeProvider";
import DefaultTheme from "@react-ratel/core/Theme/DefaultTheme";
// style
import Reset from "@react-ratel/core/Reset";
import GlobalStyle from "@react-ratel/core/GlobalStyle";
// buttons
import Button from "@react-ratel/core/Button";
import DropdownButton from "@react-ratel/core/DropdownButton";
import RoundButton from "@react-ratel/core/RoundButton";
import StackedButton from "@react-ratel/core/StackedButton";
// zones
import Box from "@react-ratel/core/Box";
import BackgroundBox from "@react-ratel/core/BackgroundBox";
import UploadBox from "@react-ratel/core/UploadBox";
import Divider from "@react-ratel/core/Divider";
// fonts
import A from "@react-ratel/core/A";
import H1 from "@react-ratel/core/H1";
import H2 from "@react-ratel/core/H2";
import H4 from "@react-ratel/core/H4";
import P from "@react-ratel/core/P";
import Text from "@react-ratel/core/Text";
// spacing
import Padding from "@react-ratel/core/Padding";
import Margin from "@react-ratel/core/Margin";
// overlay
import Overlay from "@react-ratel/core/Overlay";
// icons
import Icon from "@react-ratel/core/Icon";
// layout
import Row from "@react-ratel/core/Row";
import Col from "@react-ratel/core/Col";
import Div from "@react-ratel/core/Div";
// tooltip
import Tooltip from "@react-ratel/core/Tooltip";
// form
import Input from "@react-ratel/core/Input";
import Label from "@react-ratel/core/Label";
import Textarea from "@react-ratel/core/Textarea";
import Select from "@react-ratel/core/Select";
import VirtualizedSelect from "@react-ratel/core/VirtualizedSelect";
import DatePicker from "@react-ratel/core/DatePicker";
import Switch from "@react-ratel/core/Switch";
// modal
import Modal from "@react-ratel/core/Modal";
// list
import List from "@react-ratel/core/List";
import ListItem from "@react-ratel/core/List/ListItem";
// loader
import Loader from "@react-ratel/core/Loader";
// card
import Card from "@react-ratel/core/Card";
// image
import BackgroundImage from "@react-ratel/core/BackgroundImage";
// alert
import Alert from "@react-ratel/core/Alert";
// tag
import Tag from "@react-ratel/core/Tag";
// toast
import Toast from "@react-ratel/core/Toast";
// progress
import Progress from "@react-ratel/core/Progress";
// Stats
import Gauge from "@react-ratel/core/Gauge";

function Example() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={DefaultTheme}>
        <>
          <GlobalStyle />
          {/* Your app */}
        </>
      </ThemeProvider>
    </>
  );
}
```
