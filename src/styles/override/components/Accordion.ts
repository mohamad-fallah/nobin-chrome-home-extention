import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAccordion = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.borderRadius,
        borderWidth: variables.borderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
        boxShadow: variables.shadow,
      },
    },
  };
};
export default MuiAccordion;
