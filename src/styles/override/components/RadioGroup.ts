import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiRadioGroup = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        gap: variables.margin,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiRadioGroup;
