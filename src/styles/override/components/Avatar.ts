import getVariables from "../variables";

const variables = getVariables("light");

const MuiAvatar = {
  styleOverrides: {
    root: {
      width: variables.avatarSize,
      height: variables.avatarSize,
      borderWidth: variables.avatarBorderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      background: variables.palette.background.avatar,
      color: variables.palette.text.primary,
      fontSize: variables.fontSize,
    },
  },
};
export default MuiAvatar;
