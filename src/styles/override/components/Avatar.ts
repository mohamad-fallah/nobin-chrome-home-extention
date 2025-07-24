import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAvatar = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
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
};
export default MuiAvatar;
