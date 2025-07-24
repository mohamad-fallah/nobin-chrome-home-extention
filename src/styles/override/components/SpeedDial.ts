import variables from "../variables";

const MuiSpeedDial = {
  styleOverrides: {
    root: {
      color: variables.palette.primary.main,
    },
    fab: {
      width: variables.buttonHeight,
      height: variables.buttonHeight,
      fontSize: variables.iconSize,
      background: variables.palette.primary.main,
      color: variables.palette.primary.contrastText,
    },
  },
};
export default MuiSpeedDial;
