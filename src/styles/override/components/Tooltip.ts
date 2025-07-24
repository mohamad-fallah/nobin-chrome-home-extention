import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiTooltip = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
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
};

export default MuiTooltip;
