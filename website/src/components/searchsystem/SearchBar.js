import React, {useState} from "react";
import { Form, FloatingLabel } from "react-bootstrap";



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
        className="col-lg-12 col-md-12 col-sm-12"
      >
        <Form.Control type="text" placeholder="Search Algorithm" value={query} onChange={handleSearch}/>
      </FloatingLabel>
    </Form>
    </>
  );
};

export default SearchBar;
