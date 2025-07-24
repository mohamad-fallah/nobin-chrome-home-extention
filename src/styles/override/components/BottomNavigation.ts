import getVariables from "../variables";

const variables = getVariables("light");

const MuiBottomNavigation = {
  styleOverrides: {
    root: {
      minHeight: variables.buttonHeight,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiBottomNavigation;
