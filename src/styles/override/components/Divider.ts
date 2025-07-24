import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiDivider = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        height: variables.dividerThickness,
        background: variables.dividerColor,
        margin: `${variables.dividerMarginY}px 0`,
      },
    },
  };
};
export default MuiDivider;
