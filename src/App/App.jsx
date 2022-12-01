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
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Books" element={<Books />} />
            <Route path="Favorite" element={<Favorite />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
