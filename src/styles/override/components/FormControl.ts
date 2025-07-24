import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiFormControl = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        margin: variables.margin,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
      },
    },
  };
};
export default MuiFormControl;
