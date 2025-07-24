import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiStep = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.text.primary,
      },
      icon: {
        fontSize: variables.stepIconSize,
        color: variables.palette.primary.main,
      },
    },
  };
};
export default MuiStep;
