import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiListSubheader = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.fontSizeCaption,
        color: variables.palette.text.secondary,
        background: variables.palette.background.paper,
      },
    },
  };
};
export default MuiListSubheader;
