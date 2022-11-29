import * as React from "react";
import Box from "@mui/material/Box";

import { StyledNavbar, StyledNavbarResponsive } from "../Styled/Grid";

// import { StyledButton } from "../styled/Button";
import { Grid, Link, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TemporaryDrawer from "./Drawer";
import { StyledLinkNavbar } from "../Styled/Link";

const pages = ["Home", "All Books", "Favorite"];

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));
  const [navColor, setnavColor] = React.useState("transparent");
  const [navPosition, setnavPosition] = React.useState("absolute");
  const [navTop, setnavTop] = React.useState("40");
  const [navBorder, setnavBorder] = React.useState("rgba(48,146,85,0.25)");
  // const currentUserStorage = JSON.parse(localStorage.getItem("user"));

  // const navigate = useNavigate();
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 80 ? setnavPosition("fixed") : setnavPosition("absolute");
    window.scrollY > 80 ? setnavTop("0") : setnavTop("40");
    window.scrollY > 80
      ? setnavBorder("transparent")
      : setnavBorder("rgba(48,146,85,0.25)");
  };
  // function handleSignUp() {
  //   navigate("/signup");
  // }
  // function handleSignIn() {
  //   navigate("/login");
  // }
  function handleLinks(page) {
    // navigate(`/${page}`);
    console.log(page);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [activeButton, setActiveButton] = React.useState("Home");
  const clickedButtonHandler = (name) => {
    setActiveButton(name);
  };
  return (
    <Grid
      container
      item
      xs={12}
      spacing={0}
      sx={{
        zIndex: "3",
        backgroundColor: `${navColor}`,
        position: `${navPosition}`,
        top: `${navTop}`,
      }}
    >
      {matches ? (
        <>
          <Container>
            <StyledNavbar
              container
              item
              spacing={0}
              xs={12}
              sx={{ alignItems: "center", border: `1px solid ${navBorder} ` }}
            >
              <Grid item xs={4} sx={{ fontSize: "22px" }}>
                <Link
                  component="img"
                  src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                  sx={{ marginLeft: "20px", marginTop: "10px" }}
                />
              </Grid>
              <Grid item xs={5}>
                {pages.map((page, index) => (
                  <Box component="span" key={index} sx={{ fontSize: "22px" }}>
                    <StyledLinkNavbar
                      onClick={() => {
                        handleLinks(page);
                        clickedButtonHandler(page);
                      }}
                      sx={{
                        color: `${
                          activeButton === page ? "#198754" : "black"
                        } `,
                      }}
                    >
                      {page}
                    </StyledLinkNavbar>
                    {/* {activeButton === page && (
                        <Box
                          component="span"
                          src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-3.png"
                          sx={{height:"100px",width:"100px",backgroundColor:"red"}}
                        />
                      )} */}
                  </Box>
                ))}
              </Grid>
            </StyledNavbar>
          </Container>
        </>
      ) : (
        <StyledNavbarResponsive sx={{ border: `1px solid ${navBorder}` }}>
          <Grid container spacing={2} sx={{ margin: "5px 0px 5px 0px " }}>
            <Grid item xs={8}>
              <Link
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                sx={{ width: "160px", height: "40px" }}
              />
            </Grid>
            <Grid item xs={1}>
              <TemporaryDrawer anchor="left" />
            </Grid>
          </Grid>
        </StyledNavbarResponsive>
      )}
    </Grid>
  );
};
export default Navbar;
