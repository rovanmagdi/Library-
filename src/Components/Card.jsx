import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FormControl,  OutlinedInput, InputAdornment} from "@mui/material";
import { StyledBoxSearch } from "../Styled/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { StyledCardBook } from "../Styled/Card";
// import axios from "axios";
// import { useNavigate } from "react-router";

import axios from "axios";



export default function MediaCard({}) {
  //   const navigate = useNavigate();
  //   const handleClick = (id) => {
  //     console.log("click :", id);
  //     navigate(`/${id}`);
  //   };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [values, setValues] = React.useState({
    word: "",
  });
  const [valueSearch, setValueSearch] = React.useState("");

  const handleChangeTxt = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const BASE_URL = "https://example-data.draftbit.com/books";
  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // let obj = { id, imageBase, author, imageAuthor, title, rating };
  //  const abc= [...inputArr,[]];
  //  setInputArr(abc)

  const [books, setBooks] = React.useState([]);
  const [filterBooks, setFilterBooks] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setBooks(response.data);
    });
  }, []);
  React.useEffect(() => {
    console.log(books);
    setFilterBooks(books.slice(0, 50));
  }, [books]);

  return (
    <>
     <FormControl
                    sx={{ m: 1, width: "40ch", backgroundColor: "white" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.word}
                      onChange={handleChangeTxt("word")}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          // onClick={() => search(values.word)}
                          sx={{ cursor: "pointer" }}
                        >
                          <StyledBoxSearch>
                            <SearchOutlinedIcon />
                          </StyledBoxSearch>
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                      placeholder="Search here"
                    />
                  </FormControl>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {filterBooks.map((book,index) => (
        <StyledCardBook key={index}>
          <CardHeader
            sx={{ position: "absolute", right: "0", margin: "20px" }}
          />

          <Box component="div">
            <CardMedia
              
              sx={{
                width:"100%",
                height:"300px",
                objectFit:"contain",
                borderRadius: "100px",
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
                  <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                   {book.authors}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                {book.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                {/* <StarIcon sx={{ color: "#ffba00" }} />
                 */}
                {/* <Rating
              name="simple-controlled"
              value={Number(rating)}
              onChange={(event) => {
                handleChange(event.target.value, id);
              }}
            /> */}
              </IconButton>
            </CardActions>
          </Box>
        </StyledCardBook>
      ))}
    </Box></>
  );
}
