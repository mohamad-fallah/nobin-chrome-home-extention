import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiGrid = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        gap: variables.gridGutter,
      },
    },
  };
};
export default MuiGrid;
