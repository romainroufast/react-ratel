import { meetsContrastGuidelines } from "polished";

const getRgb = (color) => `rgb(${color})`;

const chooseColor = (color, colorLight, colorDark) => {
  const col1 = getRgb(color);
  const col2 = getRgb(colorLight);
  return meetsContrastGuidelines(col1, col2).AALarge ? col2 : getRgb(colorDark);
};

const getBorderValue = (size, color) => {
  return `${size} solid ${getRgb(color)}`;
};

const getBorder = (size, color) => {
  return `border: ${getBorderValue(size, color)};`;
};

export { getRgb, chooseColor, getBorder, getBorderValue };
