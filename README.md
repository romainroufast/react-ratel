# react-ratel

> React components library (datepicker, tooltip, popover, select...). Just wrappers around some famous libraries.

## Install

```bash
yarn add react-ratel
```

## Usage

```jsx
import React, { Component } from "react";

import {
  // theming
  ThemeProvider,
  DefaultTheme,
  // style
  Reset,
  GlobalStyle,
  // buttons
  Button,
  DropdownButton,
  RoundButton,
  StackedButton,
  // zones
  Box,
  BackgroundBox,
  UploadBox,
  Divider,
  // fonts
  A,
  H1,
  H2,
  H4,
  P,
  Text,
  // spacing
  Padding,
  Margin,
  // overlay
  Overlay,
  // icons
  Icon,
  // layout
  Row,
  Col,
  Div,
  // tooltip
  Tooltip,
  // form
  Input,
  Label,
  Textarea,
  Select,
  VirtualizedSelect,
  DatePicker,
  Switch,
  // modal
  Modal,
  // list
  List,
  ListItem,
  // loader
  Loader,
  // card
  Card,
  // image
  BackgroundImage,
  // alert
  Alert,
  // tag
  Tag,
  // toast
  Toast,
  // progress
  Progress,
  // Stats
  Gauge,
} from "react-ratel";

const theme = DefaultTheme;

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
