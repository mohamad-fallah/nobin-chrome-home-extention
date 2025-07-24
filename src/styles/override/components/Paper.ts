import variables from "../variables";

const MuiPaper = {
  styleOverrides: {
    root: {
      borderRadius: variables.paperRadius,
      padding: variables.paperPadding,
      boxShadow: variables.paperElevation ? variables.shadow : "none",
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiPaper;
