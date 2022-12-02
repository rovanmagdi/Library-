import Navbar from "../Components/Navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Home from "../Pages/Home";
import Books from "../Pages/Books";
import Details from "../Pages/Details";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Favorite from "../Pages/Favorite";
import Footer from "../Components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column",flex:"1 0 auto"}}>

        <Navbar />
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Books" element={<Books />} />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

      </Box>
    </ThemeProvider>
  );
}

export default App;
