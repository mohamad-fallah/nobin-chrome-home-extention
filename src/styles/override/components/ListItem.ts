import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiListItem = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.listItemHeight,
        padding: variables.listItemPadding,
        borderRadius: variables.borderRadius,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
        fontSize: variables.fontSize,
        transition: `all ${variables.duration} ${variables.easing}`,
      },
    },
  };
};

export default MuiListItem;
