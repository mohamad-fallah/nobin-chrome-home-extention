import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiChip = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.chipRadius,
        height: variables.chipHeight,
        fontSize: variables.chipFontSize,
        padding: `0 ${variables.chipPaddingX}px`,
        color: variables.palette.text.primary,
        background: variables.palette.background.chip,
        borderWidth: variables.borderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
      },
    },
  };
};
export default MuiChip;
