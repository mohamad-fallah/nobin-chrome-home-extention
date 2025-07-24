import variables from "../variables";

const MuiRating = {
  styleOverrides: {
    icon: {
      fontSize: variables.iconSize,
      color: variables.palette.primary.main,
    },
    iconEmpty: {
      color: variables.palette.grey[300],
    },
  },
};
export default MuiRating;
