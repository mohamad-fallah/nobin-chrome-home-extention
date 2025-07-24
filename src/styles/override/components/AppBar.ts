import variables from "../variables";

const MuiAppBar = {
  styleOverrides: {
    root: {
      minHeight: variables.appBarHeight,
      boxShadow: variables.appBarShadow,
      zIndex: variables.appBarZIndex,
      background: variables.palette.background.appBar,
      color: variables.palette.primary.contrastText,
    },
  },
};
export default MuiAppBar;
