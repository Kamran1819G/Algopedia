import React, {useState} from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";



const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);
    onSearch(query);
  };
  return (
    <>
    <Form className="search-form d-flex">
      <FloatingLabel
        controlId="floatingInput"
        label="Search Algorithm"
        className="mb-5 col-6"
      >
        <Form.Control type="text" placeholder="Search Algorithm" value={query} onChange={handleSearch}/>
      </FloatingLabel>
      <Button className=" search-btn mb-5">
        <i className="bi bi-search"></i>
      </Button>
    </Form>
    </>
  );
};

export default SearchBar;
