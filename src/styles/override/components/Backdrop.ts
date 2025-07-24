import getVariables from "../variables";

const variables = getVariables("light");

const MuiBackdrop = {
  styleOverrides: {
    root: {
      background: variables.overlayColor,
      opacity: variables.opacityBackdrop,
      backdropFilter: `blur(${variables.overlayBlur}px)`,
    },
  },
};
export default MuiBackdrop;
