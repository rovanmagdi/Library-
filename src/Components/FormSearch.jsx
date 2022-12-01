import React, { useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
  Grid,
} from "@mui/material";
import { StyledBoxSearch } from "../Styled/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { StyledTypographySpan } from "../Styled/Typography";

const FormSearch = () => {
  const [valueSearch, setValueSearch] = useState("");
  const handleChangeTxt = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const search = (word) => {
    // books.map((book) => console.log(book.title === word && console.log(book)));
    // ("str".split(' '));
    // console.log(book.title.split(' '));
    // setValueSearch(books.filter((ele) => ele.title === word));

    console.log(valueSearch);
  };
  const [values, setValues] = useState({
    word: "",
  });
  return (
    <Grid container spacing={2} sx={{margin:"0px 20px 0px 0px"}}>
      <Grid item xs={7} md={8} sm={12}>
        <Typography
          sx={{
            paddingLeft: "30px",
            fontSize: "2rem",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          All{" "}
          <StyledTypographySpan variant="span" component="span">
            Books
          </StyledTypographySpan>{" "}
          of Edule
        </Typography>
      </Grid>
      <Grid item xs={5} md={4} sm={12}>
        {" "}
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
                onClick={() => search(values.word)}
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
      </Grid>
    </Grid>
  );
};

export default FormSearch;
