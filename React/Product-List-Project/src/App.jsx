import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setProducts(data.products);
    setFilteredProducts(data.products); // show all by default
    getCategories(data.products);
  };

  const getCategories = (productsData) => {
    const categoryList = productsData.map((product) => product.category);

    setCategories(["all", ...new Set(categoryList)]); // add All
  };

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const result = products.filter(
        (product) => product.category === category,
      );
      setFilteredProducts(result);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            style={{ cursor: "pointer" }}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <hr />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
