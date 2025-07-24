import getVariables from "../variables";

const variables = getVariables("light");

const MuiBreadcrumbs = {
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
export default MuiBreadcrumbs;
