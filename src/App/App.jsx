import Navbar from "../Components/Navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Home from "../Pages/Home";
import Books from "../Pages/Books";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />
        {/* <Home/> */}
        <Books/>
      </ThemeProvider>
    </>

  );
}

export default App;
