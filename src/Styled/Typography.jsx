import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "500",
  // fontFamily: "Gordita",
  //   color:'#1d2733',
  color: `${theme.palette.secondary.main}`,
  //   fontFamily: ["monospace", "cursive"],
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2em",
  fontWeight: "500",
  // fontFamily: "Gordita",
  //   color:'#1d2733',
  color: `${theme.palette.secondary.main}`,
  //   fontFamily: ["monospace", "cursive"],
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const StyledBlackTxt = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
  fontSize: "inherit",
  display: "inline-block",
}));

export const StyledGreenTxt = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: "inherit",
  display: "inline-block",
}));

//Footer
export const StyledtitleFooter = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "22px",
  marginBottom: "25px",
}));
export const StyledtitleFooterResponsive = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "22px",
  paddingBottom: "55px",
}));

//Register
export const StyledError = styled(Typography)(({ theme }) => ({
  color: "red",
  textAlign: "left",
}));
export const StyledWhiteTxt = styled(Typography)(({ theme }) => ({
  color: `#FFFFFF`,
  fontSize: "1.2em",
  display: "inline-block",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".8rem",
  },
}));

export const StyledWhiteTitle = styled(Typography)(({ theme }) => ({
  color: `#FFFFFF`,
  fontSize: "2.1em",
  display: "inline-block",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));
//Not Found
export const StyledTypographyNotFound = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: "22px",
  marginBottom: "20px",
}));

export const StyledTypographyNotFoundTitle = styled(Typography)(
  ({ theme }) => ({
    fontWeight: "520",
    fontSize: "40px",
    marginBottom: "20px",
  })
);

//Details Courses
export const StyledTypographyDetails = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "30px 0px 30px 0px",
  fontSize: "2rem",
  fontWeight: "800",
  color: `${theme.palette.primary.main}`,
}));

//Cart
export const StyledTypographyCart = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "bold",
  color: `${theme.palette.primary.main}`,
}));
