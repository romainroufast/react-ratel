import { meetsContrastGuidelines } from "polished";

const getRgb = color => `rgb(${color})`;

const chooseColor = (color, colorLight, colorDark) => {
  const col1 = getRgb(color);
  const col2 = getRgb(colorLight);
  return meetsContrastGuidelines(col1, col2).AALarge ? col2 : getRgb(colorDark);
};

export { getRgb, chooseColor };
