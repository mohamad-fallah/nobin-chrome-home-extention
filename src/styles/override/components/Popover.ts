import variables from "../variables";

const MuiPopover = {
  styleOverrides: {
    paper: {
      borderRadius: variables.popoverRadius,
      padding: variables.popoverPadding,
      boxShadow: variables.popoverElevation ? variables.shadow : "none",
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiPopover;
