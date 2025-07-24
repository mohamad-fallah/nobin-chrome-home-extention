import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiListItemIcon = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minWidth: variables.listItemIconSize,
        color: variables.palette.text.secondary,
        fontSize: variables.iconSize,
      },
    },
  };
};
export default MuiListItemIcon;
