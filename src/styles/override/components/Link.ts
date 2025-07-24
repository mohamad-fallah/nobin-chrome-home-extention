import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiLink = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.primary.main,
        textDecoration: "underline",
        fontSize: variables.fontSize,
        transition: `color ${variables.duration} ${variables.easing}`,
      },
    },
  };
};
export default MuiLink;
