import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiCheckbox = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.primary.main,
        fontSize: variables.iconSize,
      },
      checked: {
        color: variables.palette.primary.main,
      },
    },
  };
};
export default MuiCheckbox;
