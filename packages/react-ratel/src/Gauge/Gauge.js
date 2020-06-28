/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const GaugeContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const RotatedGauge = styled.div`
  position: relative;
  transform: rotateZ(
    ${(props) => (props.startDegree ? `${props.startDegree}deg` : "90deg")}
  );
  width: 100%;
  height: 100%;
`;

const GaugeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const CircleBackground = styled.circle`
  fill: transparent;
  stroke: ${(props) => (props.color ? props.color : "#F5F5F5")};
  transition: stroke-dashoffset 0.8s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke: ${(props) => (props.color ? props.color : "#222")};
`;

const getCalculatedValues = (percentage, size, stroke) => {
  let appliedRadius;
  let appliedStroke;
  switch (size) {
    case "xs":
      appliedRadius = 10;
      appliedStroke = stroke || 1;
      break;
    case "sm":
      appliedRadius = 25;
      appliedStroke = stroke || 2.5;
      break;
    case "md":
      appliedRadius = 50;
      appliedStroke = stroke || 5;
      break;
    case "lg":
      appliedRadius = 75;
      appliedStroke = stroke || 7.5;
      break;
    case "xl":
      appliedRadius = 100;
      appliedStroke = stroke || 10;
      break;
    default:
      appliedRadius = size || 50;
      appliedStroke = stroke || 5;
  }

  const normalizedRadius = appliedRadius - appliedStroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return [
    appliedRadius,
    appliedStroke,
    normalizedRadius,
    circumference,
    strokeDashoffset,
  ];
};

export default ({
  percentage,
  size,
  stroke,
  color,
  bgColor,
  startDegree,
  children,
  rounded,
  ...otherProps
}) => {
  const [
    appliedRadius,
    appliedStroke,
    normalizedRadius,
    circumference,
    strokeDashoffset,
  ] = getCalculatedValues(percentage, size, stroke);
  const length = appliedRadius * 2;

  return (
    <GaugeContainer
      {...otherProps}
      width={`${length}px`}
      height={`${length}px`}
    >
      <RotatedGauge startDegree={startDegree}>
        <svg viewBox={`0 0 ${length} ${length}`}>
          <CircleBackground
            strokeWidth={appliedStroke}
            color={bgColor}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={appliedRadius}
            cy={appliedRadius}
          />
          <Circle
            strokeWidth={appliedStroke * 1.6}
            strokeLinecap={rounded ? "round" : "unset"}
            color={color}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={appliedRadius}
            cy={appliedRadius}
          />
        </svg>
      </RotatedGauge>

      <GaugeContent>{children}</GaugeContent>
    </GaugeContainer>
  );
};
