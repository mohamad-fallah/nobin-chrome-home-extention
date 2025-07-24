import getVariables from "../variables";

const variables = getVariables("light");

const MuiIconButton = {
  styleOverrides: {
    root: {
      borderRadius: variables.borderRadius,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      fontSize: variables.iconSize,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
  },
};
export default MuiIconButton;
