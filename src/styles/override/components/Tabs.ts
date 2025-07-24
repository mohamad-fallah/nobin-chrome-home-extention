import variables from "../variables";

const MuiTabs = {
  styleOverrides: {
    root: {
      minHeight: variables.tabHeight,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
    indicator: {
      height: variables.tabIndicatorHeight,
      borderRadius: variables.tabRadius,
      background: variables.palette.primary.main,
    },
    flexContainer: {
      fontSize: variables.tabFontSize,
    },
  },
};
export default MuiTabs;
