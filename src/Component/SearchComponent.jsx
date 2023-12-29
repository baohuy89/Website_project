// SearchComponent.js
import  { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchComponent = ({ product, searchDetail }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://6561f5c3dcd355c0832466d9.mockapi.io/api/Products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, products]);

  return (
    <div className="Card-search">
      <h4>Sản phẩm</h4>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchResults.map((result) => (
          <li key={result.id} onClick={() => searchDetail(result)}>
            <div>
              <p>Name: {result.name}</p>
              <p>Price: {result.price}</p>
              <img src={result.image} alt={result.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchComponent.propTypes = {
  product: PropTypes.array,
  searchDetail: PropTypes.func.isRequired,
};

export default SearchComponent;
