import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#198754",
      light: "#eefbf3",
      dark: "#212832",
    },
    secondary: {
      main: "#1d2733",
      light: "#ffff",
      dark: "#00000",
    },
   
  },
  typography: {
    caption: {
      textSize: "12px",
      fontWeight: "900",
    },
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },}
});
export { theme };
