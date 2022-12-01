import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { StyledGridDetails } from "../Styled/Grid";
import { StyledTypographyDetails } from "../Styled/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import TheatersIcon from "@mui/icons-material/Theaters";
import ListIcon from "@mui/icons-material/List";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useParams } from "react-router";
import ListDetails from "../Components/ListDetails";
import { StyledButtonDetails } from "../Styled/Button";

const DetailsComponent = () => {
  // use useState to take one book
  const [book, setBook] = useState({});

  // use useParams to get id from react-router
  const { id } = useParams();

  // use theme
  const theme = useTheme();

  //use medai query from MUI
  const matches = useMediaQuery(theme.breakpoints.up("976"));

  //importing useEffect from react
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CLIENT_SIDE}/${id}`).then((response) => {
      setBook(response.data);
    });
  }, [id]);

  // Function to add to array of favorites
  const arr = JSON.parse(localStorage.getItem("Favourite")) || [];
  const handleAddToFav = () => {
    const index = arr.findIndex((object) => object.id === book.id);
    if (index === -1) {
      arr.push(book);
      localStorage.setItem("Favourite", JSON.stringify(arr));
    }};
    return (
      <Container>
        {matches ? (
          <>
            <Grid container item xs={12} sx={{ marginTop: "50px" }}>
              <Grid item xs={7} sx={{ marginRight: "30px" }}>
                <Box
                  component="img"
                  src={`${book.image_url}`}
                  width="auto"
                  height="420px"
                  sx={{ borderRadius: "20px", marginLeft: "120px" }}
                />
                <Typography
                  component="h1"
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.9rem",
                    marginTop: "20px",
                  }}
                >
                  {book.title}
                </Typography>
                <Grid
                  container
                  item
                  xs={12}
                  sx={{ alignItems: "center", margin: "20px 0px 20px 0px" }}
                >
                  <Grid item xs={8}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                      >
                        {book.authors}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={2}>
                    <CardActions disableSpacing>
                      <IconButton aria-label="share">
                        {/* <StarIcon sx={{ color: "#ffba00" }} />
                         */}
                        <Rating
                          name="simple-controlled"
                          value={Number(book.rating)}
                        />
                      </IconButton>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>
              <StyledGridDetails item xs={4}>
                <StyledTypographyDetails variant="body2" component="h1">
                  {book.authors}
                </StyledTypographyDetails>

                <Box sx={{ width: "80%", maxWidth: 360, margin: "auto" }}>
                  <Divider />
                  <ListDetails
                    icon={<PersonIcon />}
                    nickName="Instructor"
                    name={book.edition}
                  />

                  <ListDetails
                    icon={<TheatersIcon />}
                    nickName="Pages"
                    name={book.num_pages}
                  />
                  <ListDetails
                    icon={<ListIcon />}
                    nickName="Level"
                    name={book.genres}
                  />
                  <ListDetails
                    icon={<LibraryBooksIcon />}
                    nickName="Language"
                    name="English"
                  />
                  <ListDetails
                    icon={<TheatersIcon />}
                    nickName="Certificate"
                    name={book.format}
                  />
                  <Box textAlign="center">
                    <StyledButtonDetails
                      variant="contained"
                      onClick={handleAddToFav}
                    >
                      Add to Favorite
                    </StyledButtonDetails>
                  </Box>
                </Box>
              </StyledGridDetails>
            </Grid>
            <Grid container item xs={7}>
              <Typography
                variant="body2"
                component="h1"
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "600",
                  margin: "20px 0px 20px 0px",
                }}
              >
                {book.title}
              </Typography>
              <Box sx={{ fontWeight: "light", fontSize: "18px" }}>
                {book.description}
              </Box>
            </Grid>
          </>
        ) : (
          <Container sx={{ maxWidth: "80%", margin: "auto" }}>
            <Grid container item xs={12}>
              <Grid
                item
                xs={12}
                sx={{ marginRight: "30px", marginLeft: "170px" }}
              >
                <Box
                  component="img"
                  src={`${book.image_url}`}
                  width="auto"
                  height="420px"
                  sx={{ borderRadius: "20px" }}
                />
                <Typography
                  component="h1"
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.9rem",
                    marginTop: "20px",
                  }}
                >
                  {book.title}
                </Typography>
                <Grid
                  container
                  item
                  xs={12}
                  sx={{ alignItems: "center", margin: "20px 0px 20px 0px" }}
                >
                  <Grid item xs={8}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                      >
                        {book.authors}
                      </Typography>
                      <CardActions disableSpacing>
                        <IconButton aria-label="share">
                          <Rating
                            name="simple-controlled"
                            value={Number(book.rating)}
                          />
                        </IconButton>
                      </CardActions>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <StyledGridDetails item xs={12} sx={{ width: "100%" }}>
                <StyledTypographyDetails variant="body2" component="h1">
                  {book.authors}
                </StyledTypographyDetails>

                <Box sx={{ width: "80%", maxWidth: 360, margin: "auto" }}>
                  <Divider />
                  <ListDetails
                    icon={<PersonIcon />}
                    nickName="Instructor"
                    name={book.edition}
                  />

                  <ListDetails
                    icon={<TheatersIcon />}
                    nickName="Pages"
                    name={book.num_pages}
                  />
                  <ListDetails
                    icon={<ListIcon />}
                    nickName="Level"
                    name={book.genres}
                  />
                  <ListDetails
                    icon={<LibraryBooksIcon />}
                    nickName="Language"
                    name="English"
                  />
                  <ListDetails
                    icon={<TheatersIcon />}
                    nickName="Certificate"
                    name={book.format}
                  />
                  <Box textAlign="center">
                    <StyledButtonDetails
                      variant="contained"
                      onClick={handleAddToFav}
                    >
                      Add to Favorite
                    </StyledButtonDetails>
                  </Box>
                </Box>
              </StyledGridDetails>
            </Grid>

            <Typography
              variant="body2"
              component="h1"
              sx={{
                fontSize: "1.7rem",
                fontWeight: "600",
                margin: "20px 0px 20px 0px",
              }}
            >
              {book.title}
            </Typography>
            <Box sx={{ fontWeight: "light", fontSize: "18px" }}>
              {book.description}
            </Box>
          </Container>
        )}
      </Container>
    );
  
};

export default DetailsComponent;
