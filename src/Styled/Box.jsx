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

export const StyledCircularBorder = styled(Box)(({ theme }) => ({
  width: "8%",
  height: "23%",
  // textAlign: 'center',
  border: "1px solid rgba(48,146,85,0.2)",
  borderRadius: "50%",
  padding: "10px",
  position: "absolute",
  bottom: "20%",
  right: "30%",
  alignContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    // width: "8%",
    height: "15%",
  },
  [theme.breakpoints.down("md")]: {
    // width: "8%",
    height: "12%",
  },
}));

export const StyledCircularBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "70%",
  //  textAlign: 'center',
  borderRadius: "50%",
  padding: "10px",
  backgroundColor: "#309255",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("md")]: {
    width: "60%",
    height: "60%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
    height: "50%",
  },
}));

export const CoverTxtBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "inline-block",
  bottom: "30%",
}));


//Courses
export const StyledBoxSearch = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  padding: "8px",
  borderRadius: "5px",
  color: `${theme.palette.secondary.light}`,
}));









//not found
export const StyledBoxNotFound = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  "&:before": {
    position: " absolute",
    content: `''`,
    backgroundImage:
      "url(https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png)",
    backgroundPosition: " center center",
    backgroundSize: " cover",
    backgroundRepeat: " no-repeat",
    width: "260px",
    height: " 21px",

    transform: " translateY(300%)",
  },
}));
///List Details Courses

export const StyledListDetailsCourse = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
}));

export const StyledcourseInstructor = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  border:`3px solid ${theme.palette.primary.light}`,
  padding: "10px",
}));
