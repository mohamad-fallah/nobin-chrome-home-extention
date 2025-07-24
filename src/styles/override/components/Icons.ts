import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const Icons = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.iconSize,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default Icons;
