import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiList = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        padding: variables.listItemPadding,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiList;
