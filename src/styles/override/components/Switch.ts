import variables from "../variables";

const MuiSwitch = {
  styleOverrides: {
    root: {
      width: variables.buttonHeight,
      height: variables.buttonHeight / 2,
      padding: variables.padding / 2,
    },
    switchBase: {
      color: variables.palette.primary.main,
    },
    track: {
      background: variables.palette.grey[300],
    },
    checked: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiSwitch;
