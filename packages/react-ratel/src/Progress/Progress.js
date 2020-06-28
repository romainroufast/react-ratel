/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const ProgressBarWrapper = styled.div.attrs((props) => ({
  style: { height: `${props.sm ? "5px" : "10px"}` },
}))`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background: #f5f5f5;
  text-align: left;
`;

const Progress = styled.div.attrs((props) => ({
  style: { width: `${(props.ratio || 0) * 100}%` },
}))`
  display: inline-block;
  position: relative;
  height: 100%;
  transition: all 0.1s linear;
  vertical-align: top;
`;

const SuccessProgress = styled(Progress)`
  background: rgb(${(props) => props.theme.color.green});
`;

const DangerProgress = styled(Progress)`
  background: rgb(${(props) => props.theme.color.red});
`;

const PendingProgress = styled(Progress)`
  background: rgb(${(props) => props.theme.color.blue});
`;

export default ({ total, success, danger, pending, sm }) => (
  <ProgressBarWrapper sm={sm}>
    <SuccessProgress ratio={(success || 0) / total} />
    <DangerProgress ratio={(danger || 0) / total} />
    <PendingProgress ratio={(pending || 0) / total} />
  </ProgressBarWrapper>
);
