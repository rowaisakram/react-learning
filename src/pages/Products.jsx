import { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  // var products = [];
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getProducts = async () => {
    const response = await axiosInstance.get("/products");
    setProducts(response.data);
    // products = response.data;
    setSearchedProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // apply filteration

    const searchResults = products.filter((product) => {
      if (product.title.toLowerCase().includes(searchString.toLowerCase()))
        return true;
      else return false;
    });

    setSearchedProducts(searchResults);
  }, [searchString]);
  return (
    <>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <div className="grid w-full grid-cols-3 gap-3">
        {searchedProducts.map((product) => {
          return (
            <ProductCard
              image={product.image}
              key={product.id}
              price={product.price}
              title={product.title}
              category={product.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
