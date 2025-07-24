import variables from "../variables";

const MuiMenuItem = {
  styleOverrides: {
    root: {
      minHeight: variables.menuItemHeight,
      padding: `${variables.menuItemPaddingY}px ${variables.menuItemPaddingX}px`,
      borderRadius: variables.menuRadius,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      fontSize: variables.menuItemFontSize,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
  },
};
export default MuiMenuItem;
