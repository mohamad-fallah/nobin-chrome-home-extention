import getVariables from "../variables";

const variables = getVariables("light");

const MuiMenu = {
  styleOverrides: {
    paper: {
      borderRadius: variables.menuRadius,
      padding: variables.menuPadding,
      boxShadow: variables.menuElevation ? variables.shadow : "none",
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
    list: {
      padding: variables.menuPadding,
    },
  },
};
export default MuiMenu;
