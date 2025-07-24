import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiIconButton = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.borderRadius,
        color: variables.palette.text.primary,
        background: variables.palette.background.paper,
        fontSize: variables.iconSize,
        transition: `all ${variables.duration} ${variables.easing}`,
      },
    },
  };
};
export default MuiIconButton;
