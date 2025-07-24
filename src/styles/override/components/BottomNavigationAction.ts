import getVariables from "../variables";

const variables = getVariables("light");

const MuiBottomNavigationAction = {
  styleOverrides: {
    root: {
      color: variables.palette.text.primary,
      fontSize: variables.iconSize,
    },
    selected: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiBottomNavigationAction;
