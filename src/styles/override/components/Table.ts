import getVariables from "../variables";

const variables = getVariables("light");

const MuiTable = {
  styleOverrides: {
    root: {
      borderRadius: variables.tableRadius,
      borderWidth: variables.tableBorderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiTable;
