import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiToggleButton = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.buttonBorderRadius,
        borderWidth: variables.borderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
        fontSize: variables.buttonFontSize,
        transition: `all ${variables.duration} ${variables.easing}`,
      },
      selected: {
        background: variables.palette.primary.main,
        color: variables.palette.primary.contrastText,
      },
    },
  };
};
export default MuiToggleButton;
