import getVariables from "../variables";

const variables = getVariables("light");

const MuiDrawer = {
  styleOverrides: {
    paper: {
      width: variables.drawerWidth,
      boxShadow: variables.drawerElevation ? variables.shadow : "none",
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiDrawer;
