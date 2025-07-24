import variables from "../variables";

const MuiLinearProgress = {
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
export default MuiLinearProgress;
