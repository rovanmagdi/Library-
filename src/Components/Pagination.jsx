import {useState} from "react";
//Use Pagination from MUI
import { Pagination } from "@mui/material";

//Use Stack from MUI
import { Stack } from "@mui/system";

//Use props in component for pass data for another component (props)
const PaginationComponent = (props) => {

  const [page, setPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalbooks / props.booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack alignItems="center" margin="2rem">
      <Pagination
        count={pageNumbers.length}
        page={page}
        color="primary"
        onClick={() => props.paginate(page)}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationComponent;
