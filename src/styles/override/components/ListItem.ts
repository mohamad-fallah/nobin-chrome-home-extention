import variables from "../variables";

const MuiListItem = {
  styleOverrides: {
    root: {
      minHeight: variables.listItemHeight,
      padding: variables.listItemPadding,
      borderRadius: variables.borderRadius,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      fontSize: variables.fontSize,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
  },
};
export default MuiListItem;
