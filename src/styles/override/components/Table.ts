import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiTable = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        borderRadius: variables.tableRadius,
        borderWidth: variables.tableBorderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiTable;
