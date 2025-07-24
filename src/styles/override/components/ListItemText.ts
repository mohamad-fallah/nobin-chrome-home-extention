import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiListItemText = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.fontSize,
        color: variables.palette.text.primary,
      },
      secondary: {
        color: variables.palette.text.secondary,
      },
    },
  };
};
export default MuiListItemText;
