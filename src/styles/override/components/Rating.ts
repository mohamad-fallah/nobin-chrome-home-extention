import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiRating = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      icon: {
        fontSize: variables.iconSize,
        color: variables.palette.primary.main,
      },
      iconEmpty: {
        color: variables.palette.grey[300],
      },
    },
  };
};
export default MuiRating;
