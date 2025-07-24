import variables from "../variables";

const Progress = {
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
export default Progress;
