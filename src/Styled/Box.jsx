import styled from "@emotion/styled";
import { Box } from "@mui/material";

//for all pages
export const StyledPageCover = styled(Box)(({ theme }) => ({
  minHeight: "500px",
  width: "100%",
  backgroundColor: "#E7F8EE",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "300px",
  },
}));


export const CoverTxtBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "inline-block",
  bottom: "30%",
}));











//not found
export const StyledBoxNotFound = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  
}));

///List Details Courses

export const StyledListDetailsBook = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
}));


