import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiFormLabel = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.fontSize,
        color: variables.palette.text.secondary,
      },
      focused: {
        color: variables.palette.primary.main,
      },
    },
  };
};
export default MuiFormLabel;
