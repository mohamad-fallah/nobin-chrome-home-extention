import getVariables from "../variables";

const variables = getVariables("light");

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
