import { createTheme } from "@mui/material";
import override from "./override";
import getVariables, { paletteLight, paletteDark } from "./override/variables";

const getShadows = (shadow: string) =>
  ["none", ...Array(24).fill(shadow)] as [
    "none",
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];

export const createAppTheme = (mode: "light" | "dark" = "dark") => {
  const variables = getVariables(mode);
  return createTheme({
    components: override,
    palette: {
      mode,
      ...(mode === "dark" ? paletteDark : paletteLight),
    },
    typography: {
      fontFamily: "'Vazirmatn', Arial, Tahoma, 'sans-serif'",
      fontSize: variables.fontSize,
      fontWeightRegular: variables.fontWeight,
      fontWeightBold: variables.fontWeightBold,
    },
    shape: {
      borderRadius: variables.borderRadius,
    },
    spacing: variables.padding,
    zIndex: {
      appBar: variables.zIndexAppBar,
      drawer: variables.zIndexDrawer,
      modal: variables.zIndexModal,
      snackbar: variables.zIndexSnackbar,
      tooltip: variables.zIndexTooltip,
    },
    shadows: getShadows(variables.shadow),
    breakpoints: {
      values: {
        xs: variables.breakpointXS,
        sm: variables.breakpointSM,
        md: variables.breakpointMD,
        lg: variables.breakpointLG,
        xl: variables.breakpointXL,
      },
    },
  });
};

export const theme = createAppTheme("dark");
