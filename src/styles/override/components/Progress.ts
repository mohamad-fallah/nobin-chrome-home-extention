import getVariables from "../variables";

const variables = getVariables("light");

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
