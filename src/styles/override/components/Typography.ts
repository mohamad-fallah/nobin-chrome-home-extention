import getVariables from "../variables";

const variables = getVariables("light");

const MuiTypography = {
  styleOverrides: {
    root: {
      fontSize: variables.fontSize,
      fontWeight: variables.fontWeight,
      lineHeight: variables.lineHeight,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiTypography;
