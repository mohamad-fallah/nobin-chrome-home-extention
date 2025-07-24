import getVariables from "../variables";

const variables = getVariables("light");

const MuiListSubheader = {
  styleOverrides: {
    root: {
      fontSize: variables.fontSizeCaption,
      color: variables.palette.text.secondary,
      background: variables.palette.background.paper,
    },
  },
};
export default MuiListSubheader;
