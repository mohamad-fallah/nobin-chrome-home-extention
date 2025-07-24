import getVariables from "../variables";

const variables = getVariables("light");

const MuiList = {
  styleOverrides: {
    root: {
      padding: variables.listItemPadding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiList;
