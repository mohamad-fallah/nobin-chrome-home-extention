import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiDrawer = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      paper: {
        width: variables.drawerWidth,
        boxShadow: variables.drawerElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiDrawer;
