import getVariables from "../variables";

const variables = getVariables("light");

const MuiTab = {
  styleOverrides: {
    root: {
      minHeight: variables.tabHeight,
      fontSize: variables.tabFontSize,
      borderRadius: variables.tabRadius,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
    selected: {
      color: variables.palette.primary.main,
      background: variables.palette.primary.contrastText,
    },
  },
};
export default MuiTab;
