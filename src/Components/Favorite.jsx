import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyledGridFavorite } from "../Styled/Grid";
import { StyledTypographyCart } from "../Styled/Typography";
import emptyFavorite from "../assets/empty-cart.svg";
import { StyledButtonHome } from "../Styled/Button";
import { useNavigate } from "react-router";
function FavoriteComponent(props) {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("Favourite")) || []);
  }, []);


  const handleDelete = (id) => {
    if (window.confirm("Are you sure to Delete Item ?")) {
      const filterFavorite = setFavorite(favorite.filter((u) => u.id !== id));
      localStorage.setItem("Favourite", JSON.stringify(filterFavorite));
      if (localStorage.getItem("Favourite") === "undefined") {
        localStorage.setItem("Favourite", JSON.stringify([]));
      }
    }
  };

  const nagivate=useNavigate();
  const handleGoToHome = () => {
   
    nagivate('/Home');
  };
  return (
    <Container>
      {favorite?.length ? (
        favorite.map((item, index) => {
          return (
            <StyledGridFavorite item container xs={12} key={index}>
              <Grid item xs={2.4}>
                <Box
                  component="img"
                  src={`${item.image_url}`}
                  sx={{ width: "50%", margim: "10px" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: "bolder" }}>
                  {item.title}
                </Typography>
                <Grid container item xs={12} sx={{ alignItems: "center" }}>
                  <Grid item xs={5}>
                    <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                      {item.authors}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <StyledTypographyCart variant="body2">
                      {item.num_pages}
                    </StyledTypographyCart>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </Button>
            </StyledGridFavorite>
          );
        })
      ) : (
        <>
          <Box
            component="img"
            src={emptyFavorite}
            height="400px"
            sx={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          />
          <Stack alignItems="center" margin="20px">
            <StyledButtonHome onClick={handleGoToHome}>
              Go to Home
            </StyledButtonHome>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default FavoriteComponent;
