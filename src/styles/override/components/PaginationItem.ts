import getVariables from "../variables";

const variables = getVariables("light");

const MuiPaginationItem = {
  styleOverrides: {
    root: {
      minWidth: variables.paginationItemSize,
      height: variables.paginationItemSize,
      fontSize: variables.paginationFontSize,
      borderRadius: variables.paginationRadius,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
    },
  },
};
export default MuiPaginationItem;
