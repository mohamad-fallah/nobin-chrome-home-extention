import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const TransferList = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.borderRadius,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default TransferList;
