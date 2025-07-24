import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiPopover = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      paper: {
        borderRadius: variables.popoverRadius,
        padding: variables.popoverPadding,
        boxShadow: variables.popoverElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiPopover;
