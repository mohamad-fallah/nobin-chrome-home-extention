import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAccordionSummary = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.buttonHeight,
        padding: variables.padding,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiAccordionSummary;
