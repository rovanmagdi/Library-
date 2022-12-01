import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import { Grid, Link, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledNavbar, StyledNavbarResponsive } from "../Styled/Grid";
import logo from '../assets/logo.webp'
import TemporaryDrawer from "./Drawer";
import { StyledLinkNavbar } from "../Styled/Link";



const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));

  //use useNavigate for routing
  const navigate = useNavigate();

  // Use useSatet to use state for link active
  const [activeLink, setActiveLink] = useState("Home");

  // Links in Navbar 
  const pages = ["Home", "Books", "Favorite"];

  // Change backgroundcolor for Navbar 
  const [navColor, setnavColor] = useState("transparent");

  // Change position for Navbar 
  const [navPosition, setnavPosition] = useState("absolute");

  // Change top for Navbar 
  const [navTop, setnavTop] = useState("40");

  // Change top for border 
  const [navBorder, setnavBorder] = useState("rgba(48,146,85,0.25)");

  // Function whrn scroll for Navbar
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 80 ? setnavPosition("fixed") : setnavPosition("absolute");
    window.scrollY > 80 ? setnavTop("0") : setnavTop("40");
    window.scrollY > 80
      ? setnavBorder("transparent")
      : setnavBorder("rgba(48,146,85,0.25)");
  };

  // Links for different pages
  function handleLinks(page) {
    navigate(`/${page}`);
    console.log(page);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const clickedButtonHandler = (name) => {
    setActiveLink(name);
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
                  src={logo}
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
                        color: `${activeLink === page ? "#198754" : "black"
                          } `,
                      }}
                    >
                      {page}
                    </StyledLinkNavbar>

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
                src={logo}
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
