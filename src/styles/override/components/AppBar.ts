import getVariables from "../variables";

const variables = getVariables("light");

const MuiAppBar = {
  styleOverrides: {
    root: {
      minHeight: variables.appBarHeight,
      boxShadow: variables.appBarShadow,
      zIndex: variables.appBarZIndex,
      background: variables.palette.background.appBar,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiAppBar;
