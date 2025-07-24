import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiImageList = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        gap: variables.masonryGutter,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiImageList;
