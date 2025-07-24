import getVariables from "../variables";

const variables = getVariables("light");

const MuiListItemIcon = {
  styleOverrides: {
    root: {
      minWidth: variables.listItemIconSize,
      color: variables.palette.text.secondary,
      fontSize: variables.iconSize,
    },
  },
};
export default MuiListItemIcon;
