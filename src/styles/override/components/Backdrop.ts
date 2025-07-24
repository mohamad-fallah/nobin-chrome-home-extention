import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiBackdrop = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        background: variables.overlayColor,
        opacity: variables.opacityBackdrop,
        backdropFilter: `blur(${variables.overlayBlur}px)`,
      },
    },
  };
};
export default MuiBackdrop;
