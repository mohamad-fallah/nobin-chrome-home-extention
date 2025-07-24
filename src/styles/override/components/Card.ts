import getVariables from "../variables";

const variables = getVariables("light");

const MuiCard = {
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

export default MuiCard;
