import variables from "../variables";

const MuiDialog = {
  styleOverrides: {
    paper: {
      borderRadius: variables.borderRadius,
      padding: variables.padding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiDialog;
