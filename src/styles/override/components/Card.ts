import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiCard = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.cardRadius,
        padding: variables.cardPadding,
        boxShadow: variables.cardElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiCard;
