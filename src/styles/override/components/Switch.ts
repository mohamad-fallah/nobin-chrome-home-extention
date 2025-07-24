import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiSwitch = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        width: variables.buttonHeight,
        height: variables.buttonHeight / 2,
        padding: variables.padding / 2,
      },
      switchBase: {
        color: variables.palette.primary.main,
      },
      track: {
        background: variables.palette.grey[300],
      },
      checked: {
        color: variables.palette.primary.main,
      },
    },
  };
};

export default MuiSwitch;
