import getVariables from "../variables";

const variables = getVariables("light");

const MuiSkeleton = {
  styleOverrides: {
    root: {
      borderRadius: variables.skeletonRadius,
      minHeight: variables.skeletonHeight,
      animationDuration: variables.skeletonAnimationDuration,
      background: variables.palette.grey[200],
    },
  },
};
export default MuiSkeleton;
