import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiFormHelperText = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.fontSizeCaption,
        color: variables.palette.text.secondary,
      },
      error: {
        color: variables.palette.error.main,
      },
    },
  };
};
export default MuiFormHelperText;
