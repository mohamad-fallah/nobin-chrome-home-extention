import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiCircularProgress = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.primary.main,
        thickness: variables.progressThickness,
      },
    },
  };
};
export default MuiCircularProgress;
