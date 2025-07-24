import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiOutlinedInput = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.inputBorderRadius,
        fontSize: variables.inputFontSize,
        minHeight: variables.inputHeight,
        padding: `${variables.inputPaddingY}px ${variables.inputPaddingX}px`,
        borderWidth: variables.inputBorderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
        transition: `all ${variables.duration} ${variables.easing}`,
      },
    },
  };
};
export default MuiOutlinedInput;
