import variables from "../variables";

const MuiStepper = {
  styleOverrides: {
    root: {
      padding: variables.stepperPadding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
    icon: {
      fontSize: variables.stepIconSize,
    },
    connector: {
      borderWidth: variables.stepConnectorThickness,
      borderColor: variables.palette.border.main,
    },
  },
};
export default MuiStepper;
