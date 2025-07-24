import { createTheme } from "@mui/material";
import override from "./override";

export const theme = createTheme({
  components: override,
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Vazirmatn', Arial, Tahoma, 'sans-serif'",
  },
});
