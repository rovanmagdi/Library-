import { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { StyledCardActions, StyledCardBook } from "../Styled/Card";
// import axios from "axios";
// import { useNavigate } from "react-router";

import axios from "axios";
import { StyledTypographyCard, StyledTypographySpan } from "../Styled/Typography";

import PaginationComponent from "./Pagination";
import CircularIndeterminate from "./Loading";
import FormSearch from "./FormSearch";
import { useNavigate } from "react-router";

export default function CardHome() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sliceBook, setSliceBook] = useState([]);


  //Fetch data from Api with axios
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_CLIENT_SIDE);
      setBooks(res.data);
      setLoading(false);
    };

    fetchBooks();
  }, []);
  useEffect(() => {
    setSliceBook(books.splice(0,4));
  }, [books]);

  //nagivate

  const nagivate = useNavigate();
  const handleDetails = (id) => {
    console.log(id);
    nagivate(`/${id}`);
  };

  return (
    <Container>
    
      {!loading ? (
        <>
        <Typography
          sx={{
            paddingLeft: "30px",
            fontSize: "2rem",
            fontWeight: "600",
            margin: "20px",
          }}
        >
          All{" "}
          <StyledTypographySpan variant="span" component="span">
            Books
          </StyledTypographySpan>{" "}
          of Edule
        </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {sliceBook.map((book, index) => (
              <StyledCardBook
                key={index}
                onClick={() => handleDetails(book.id)}
              >
                <CardHeader
                  sx={{ position: "absolute", right: "0", margin: "20px" }}
                />

                <Box component="div">
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "300px",
                      objectFit: "contain",
                    }}
                    component="img"
                    image={book.image_url}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{ alignItems: "center", marginBottom: "15px" }}
                    >
                      <Grid item xs={9}>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "1rem", height: "35px" }}
                        >
                          {book.authors}
                        </Typography>
                      </Grid>
                    </Grid>

                    <StyledTypographyCard variant="body2">
                      {book.title}
                    </StyledTypographyCard>
                  </CardContent>
                  <StyledCardActions disableSpacing>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {book.rating}
                    </Typography>

                    <IconButton aria-label="share">
                      <Rating
                        name="simple-controlled"
                        value={Number(book.rating)}
                      />
                    </IconButton>
                  </StyledCardActions>
                </Box>
              </StyledCardBook>
            ))}
          </Box>
         
        </>
      ) : (
        <>
          <CircularIndeterminate />
        </>
      )}
    </Container>
  );
}
