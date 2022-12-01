import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { StyledButtonNotFound } from "../Styled/Button";
import {
  StyledTypographyNotFound,
  StyledTypographyNotFoundTitle,
} from "../Styled/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledBoxNotFound } from "../Styled/Box";
import errorImage from '../assets/error.webp'
import { useNavigate } from "react-router";

const NotFoundComponent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));
  const nagivate=useNavigate();
  const handleGoToHome=()=>
  {
    nagivate('/Home')
  }

  return (
    <Container>
      {matches ? (
        <>
          <Grid container sx={{ margin: "50px 0px 50px 0px " }}>
            <Grid item xs={7} >
              <Box
                component="img"
                src={errorImage}
              />
            </Grid>
            <Grid item xs={5} sx={{ marginTop: "50px" }}>
              <StyledTypographyNotFound component="p" variant="body1">
                {" "}
                This Page is Not Found.
              </StyledTypographyNotFound>
              <StyledTypographyNotFoundTitle component="div" variant="body1">
                {" "}
                We are very sorry for error. We
                <StyledBoxNotFound component="span" >
                  {" "}
                  can’t find this{" "}
                </StyledBoxNotFound>
                page.
                
              </StyledTypographyNotFoundTitle>
              <Typography
                component="div"
                variant="body1"
                sx={{ color: "#52565B", fontSize: "20px" }}
              >
                It has survived not only five centuries but also the leap into
                electronic typesetting.
              </Typography>
              <StyledButtonNotFound sx={{ fontWeight: "100" }}onClick={handleGoToHome}>
                Back to Home
              </StyledButtonNotFound>
            </Grid>
          </Grid>
        </>
      ) : (
        <Box >
          <Grid container sx={{maxWidth:"80%",margin:"auto"}}>
            <Grid item xs={12}>
              <Box
                component="img"
                src={errorImage}
                width="100%"
                
              />
            </Grid>
          </Grid>
          <Grid container  sx={{maxWidth:"80%",margin:"auto"}}>
            <Grid item xs={12} sx={{ marginTop: "50px" }}>
              <StyledTypographyNotFound component="p" variant="body1">
                {" "}
                This Page is Not Found.
              </StyledTypographyNotFound>
              <StyledTypographyNotFoundTitle component="div" variant="body1">
                {" "}
                We are very sorry for error. We
                <StyledBoxNotFound component="span" >
                  {" "}
                  can’t find this{" "}
                </StyledBoxNotFound>
                page.
              
              </StyledTypographyNotFoundTitle>
              <Typography
                component="div"
                variant="body1"
                sx={{ color: "#52565B", fontSize: "20px" }}
              >
                It has survived not only five centuries but also the leap into
                electronic typesetting.
              </Typography>
              <StyledButtonNotFound sx={{ fontWeight: "100" }} onClick={handleGoToHome}>
                Back to Home
              </StyledButtonNotFound>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default NotFoundComponent;
