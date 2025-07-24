import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiFab = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        width: variables.buttonHeight,
        height: variables.buttonHeight,
        borderRadius: variables.buttonBorderRadius,
        boxShadow: variables.buttonElevation ? variables.shadow : "none",
        background: variables.palette.primary.main,
        color: variables.palette.primary.contrastText,
        fontSize: variables.buttonFontSize,
      },
    },
  };
};
export default MuiFab;
