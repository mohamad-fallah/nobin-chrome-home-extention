import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiBadge = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      badge: {
        minWidth: variables.badgeSize,
        height: variables.badgeSize,
        fontSize: variables.badgeFontSize,
        borderWidth: variables.badgeBorderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.background.paper,
        background: variables.palette.primary.main,
        color: variables.palette.primary.contrastText,
      },
    },
  };
};
export default MuiBadge;
