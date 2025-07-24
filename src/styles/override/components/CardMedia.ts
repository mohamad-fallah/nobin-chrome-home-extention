import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiCardMedia = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        height: variables.cardMediaHeight,
        borderRadius: variables.cardRadius,
      },
    },
  };
};
export default MuiCardMedia;
