import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiBreadcrumbs = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        fontSize: variables.breadcrumbFontSize,
        color: variables.palette.text.primary,
      },
      separator: {
        fontSize: variables.breadcrumbSeparatorSize,
        margin: `0 ${variables.breadcrumbItemSpacing}px`,
        color: variables.palette.text.secondary,
      },
    },
  };
};
export default MuiBreadcrumbs;
