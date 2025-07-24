import getVariables from "../variables";

const variables = getVariables("light");

const MaterialIcons = {
  styleOverrides: {
    root: {
      fontSize: variables.iconSize,
      color: variables.palette.text.primary,
    },
  },
};
export default MaterialIcons;
