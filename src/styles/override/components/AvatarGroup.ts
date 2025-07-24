import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAvatarGroup = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.text.primary,
      },
      avatar: {
        width: variables.avatarSize,
        height: variables.avatarSize,
        fontSize: variables.fontSize,
        background: variables.palette.background.avatar,
        color: variables.palette.text.primary,
        borderWidth: variables.avatarBorderWidth,
        borderStyle: variables.borderStyle,
        borderColor: variables.palette.border.main,
      },
    },
  };
};
export default MuiAvatarGroup;
