import variables from "../variables";

const MuiTooltip = {
  styleOverrides: {
    tooltip: {
      fontSize: variables.tooltipFontSize,
      padding: variables.tooltipPadding,
      borderRadius: variables.tooltipRadius,
      boxShadow: variables.tooltipElevation ? variables.shadow : "none",
      background: variables.palette.grey[700],
      color: variables.palette.text.contrast,
    },
  },
};
export default MuiTooltip;
