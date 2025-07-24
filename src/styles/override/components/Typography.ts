import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiTypography = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.fontSize,
        fontWeight: variables.fontWeight,
        lineHeight: variables.lineHeight,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiTypography;
