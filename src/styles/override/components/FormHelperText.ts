import variables from "../variables";

const MuiFormHelperText = {
  styleOverrides: {
    root: {
      fontSize: variables.fontSizeCaption,
      color: variables.palette.text.secondary,
    },
    error: {
      color: variables.palette.error.main,
    },
  },
};
export default MuiFormHelperText;
