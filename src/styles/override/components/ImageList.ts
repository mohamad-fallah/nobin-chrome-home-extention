import getVariables from "../variables";

const variables = getVariables("light");

const MuiImageList = {
  styleOverrides: {
    root: {
      gap: variables.masonryGutter,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiImageList;
