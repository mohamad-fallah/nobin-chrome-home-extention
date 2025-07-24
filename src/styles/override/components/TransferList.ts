import getVariables from "../variables";

const variables = getVariables("light");

const TransferList = {
  styleOverrides: {
    root: {
      borderRadius: variables.borderRadius,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default TransferList;
