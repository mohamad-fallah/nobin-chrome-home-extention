import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiDialog = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      paper: {
        borderRadius: variables.borderRadius,
        padding: variables.padding,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiDialog;
