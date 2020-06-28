import DefaultTheme from "./DefaultTheme";

export default {
  ...DefaultTheme,
  ...{
    body: {
      ...DefaultTheme.body,
      bg: "#1c1e2f",
      color: "#eef2f4",
    },
    color: {
      ...DefaultTheme.color,
      primary: "1,255,223", // 23,162,184 | 255,196,38 | 38,135,255
      secondary: "137,1,255",
      light: "34, 37, 55",
      white: "28, 30, 47",
      dark: "24,25,26",
      blue: "175, 200, 255",
      red: "255, 46, 93",
      yellow: "255, 225, 37",
      green: "175, 255, 177",
    },
    font: {
      ...DefaultTheme.font,
      family: "'Roboto', sans-serif",
      familyUrl: "https://fonts.googleapis.com/css?family=Roboto:400,500,800",
      size: "14px",
    },
    form: {
      ...DefaultTheme.form,
      color: "240, 243, 255",
      backgroundColor: "67, 75, 105",
    },
    border: {
      ...DefaultTheme.border,
      color: "56,62,92",
      radius: "8px",
    },
  },
};
