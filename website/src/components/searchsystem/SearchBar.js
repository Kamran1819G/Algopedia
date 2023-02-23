import React, {useState} from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import AllAlgorithms from "../../JSON/AllAlgorithms.json";
import AlgorithmCard from "../algorithmcard/AlgorithmCard";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
  
      const results = AllAlgorithms.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
  
      setSearchResults(results);
    };
  return (
    <>
    <Form className="search-form d-flex">
      <FloatingLabel
        controlId="floatingInput"
        label="Search Algorithm"
        className="mb-3 col-12"
      >
        <Form.Control type="search" placeholder="Search Algorithm" value={searchQuery} onChange={handleSearch} />
      </FloatingLabel>
      <Button className=" search-btn mb-3">
        <i className="bi bi-search"></i>
      </Button>
    </Form>
    <div className="card-container d-flex justify-content-evenly">
              {searchResults.map((item) => {
                return (
                        <AlgorithmCard
                          key={item.id}
                          title={item.title}
                          category={item.category}
                          url={item.url}
                        />
                );
              })}
              </div>
    </>
  );
};

export default SearchBar;
