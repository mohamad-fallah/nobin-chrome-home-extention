import variables from "../variables";

const MuiStepLabel = {
  styleOverrides: {
    label: {
      fontSize: variables.stepLabelFontSize,
      color: variables.palette.text.primary,
    },
    active: {
      color: variables.palette.primary.main,
    },
    completed: {
      color: variables.palette.success.main,
    },
  },
};
export default MuiStepLabel;
