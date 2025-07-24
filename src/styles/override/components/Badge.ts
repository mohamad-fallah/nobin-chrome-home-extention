import variables from "../variables";

const MuiBadge = {
  styleOverrides: {
    badge: {
      minWidth: variables.badgeSize,
      height: variables.badgeSize,
      fontSize: variables.badgeFontSize,
      borderWidth: variables.badgeBorderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.background.paper,
      background: variables.palette.primary.main,
      color: variables.palette.primary.contrastText,
    },
  },
};
export default MuiBadge;
