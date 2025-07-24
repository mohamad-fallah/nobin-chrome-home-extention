import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiTabs = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.tabHeight,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
      indicator: {
        height: variables.tabIndicatorHeight,
        borderRadius: variables.tabRadius,
        background: variables.palette.primary.main,
      },
      flexContainer: {
        fontSize: variables.tabFontSize,
      },
    },
  };
};
export default MuiTabs;
