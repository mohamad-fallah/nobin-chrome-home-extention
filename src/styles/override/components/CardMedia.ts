import getVariables from "../variables";

const variables = getVariables("light");

const MuiCardMedia = {
  styleOverrides: {
    root: {
      height: variables.cardMediaHeight,
      borderRadius: variables.cardRadius,
    },
  },
};
export default MuiCardMedia;
