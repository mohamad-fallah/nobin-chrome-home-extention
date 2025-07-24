import variables from "../variables";

const MuiLink = {
  styleOverrides: {
    root: {
      color: variables.palette.primary.main,
      textDecoration: "underline",
      fontSize: variables.fontSize,
      transition: `color ${variables.duration} ${variables.easing}`,
    },
  },
};
export default MuiLink;
