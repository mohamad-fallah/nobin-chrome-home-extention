import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAccordionActions = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        padding: variables.padding,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiAccordionActions;
