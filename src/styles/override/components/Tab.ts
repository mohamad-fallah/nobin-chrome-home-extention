import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiTab = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.tabHeight,
        fontSize: variables.tabFontSize,
        borderRadius: variables.tabRadius,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
        transition: `all ${variables.duration} ${variables.easing}`,
      },
      selected: {
        color: variables.palette.primary.main,
        background: variables.palette.primary.contrastText,
      },
    },
  };
};
export default MuiTab;
