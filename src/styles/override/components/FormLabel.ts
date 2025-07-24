import variables from "../variables";

const MuiFormLabel = {
  styleOverrides: {
    root: {
      fontSize: variables.fontSize,
      color: variables.palette.text.secondary,
    },
    focused: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiFormLabel;
