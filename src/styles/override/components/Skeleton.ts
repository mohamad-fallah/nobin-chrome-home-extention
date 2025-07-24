import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiSkeleton = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.skeletonRadius,
        minHeight: variables.skeletonHeight,
        animationDuration: variables.skeletonAnimationDuration,
        background: variables.palette.grey[200],
      },
    },
  };
};
export default MuiSkeleton;
