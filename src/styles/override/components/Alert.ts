import variables from "../variables";

const MuiAlert = {
  styleOverrides: {
    root: {
      borderRadius: variables.borderRadius,
      padding: variables.padding,
      fontSize: variables.fontSize,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
    },
    standardSuccess: {
      background: variables.palette.success.main,
      color: variables.palette.success.contrastText,
    },
    standardError: {
      background: variables.palette.error.main,
      color: variables.palette.error.contrastText,
    },
    standardWarning: {
      background: variables.palette.warning.main,
      color: variables.palette.warning.contrastText,
    },
    standardInfo: {
      background: variables.palette.info.main,
      color: variables.palette.info.contrastText,
    },
  },
};
export default MuiAlert;
