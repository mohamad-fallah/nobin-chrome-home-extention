import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiSpeedDial = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.primary.main,
      },
      fab: {
        width: variables.buttonHeight,
        height: variables.buttonHeight,
        fontSize: variables.iconSize,
        background: variables.palette.primary.main,
        color: variables.palette.primary.contrastText,
      },
    },
  };
};
export default MuiSpeedDial;
