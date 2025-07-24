import variables from "../variables";

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
