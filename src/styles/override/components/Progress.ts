import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const Progress = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        height: variables.progressBarHeight,
        borderRadius: variables.progressRadius,
        background: variables.progressTrackColor,
      },
      bar: {
        background: variables.progressBarColor,
      },
    },
  };
};
export default Progress;
