import variables from "../variables";

const MuiDivider = {
  styleOverrides: {
    root: {
      height: variables.dividerThickness,
      background: variables.dividerColor,
      margin: `${variables.dividerMarginY}px 0`,
    },
  },
};
export default MuiDivider;
