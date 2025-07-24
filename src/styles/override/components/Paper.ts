import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiPaper = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.paperRadius,
        padding: variables.paperPadding,
        boxShadow: variables.paperElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiPaper;
