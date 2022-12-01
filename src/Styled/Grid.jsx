import styled from "@emotion/styled";
import { Grid } from "@mui/material";
// 705
//Navbar
export const StyledNavbar = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  marginTop: "20px",
  borderRadius: "10px",
  // paddingTop:"0"
}));
export const StyledNavbarResponsive = styled(Grid)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  borderRadius: "10px",
  fontSize: "20px",
}));

//Details Book
export const StyledGridDetails = styled(Grid)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.light}`,
  color: `${theme.palette.secondary.main}`,
  borderRadius: "20px",
}));



export const StyledGridFavorite = styled(Grid)(({ theme }) => ({
  border: `3px solid ${theme.palette.primary.light}`,
  alignItems: "center",
  marginTop: "20px",
}));