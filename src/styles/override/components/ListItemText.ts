import getVariables from "../variables";

const variables = getVariables("light");

const MuiListItemText = {
  styleOverrides: {
    root: {
      fontSize: variables.fontSize,
      color: variables.palette.text.primary,
    },
    secondary: {
      color: variables.palette.text.secondary,
    },
  },
};
export default MuiListItemText;
