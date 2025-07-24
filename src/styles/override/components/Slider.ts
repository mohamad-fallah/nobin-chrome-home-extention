import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiSlider = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.primary.main,
        height: variables.progressBarHeight,
      },
      track: {
        height: variables.progressBarHeight,
        borderRadius: variables.borderRadius,
      },
      rail: {
        height: variables.progressBarHeight,
        borderRadius: variables.borderRadius,
        background: variables.palette.grey[300],
      },
      thumb: {
        width: variables.iconSize,
        height: variables.iconSize,
        background: variables.palette.primary.main,
        border: `${variables.borderWidth}px ${variables.borderStyle} ${variables.palette.border.main}`,
      },
    },
  };
};
export default MuiSlider;
