import variables from "../variables";

const MuiCheckbox = {
  styleOverrides: {
    root: {
      color: variables.palette.primary.main,
      fontSize: variables.iconSize,
    },
    checked: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiCheckbox;
