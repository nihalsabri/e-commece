import "./home.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { products, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const nextPage = () => {
    if (indexOfLastProduct < products.length) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please log in to add products to your cart.");
      return;
    }
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`, { autoClose: 3000 });
  };

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="product-list">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>


          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <span> Page {currentPage} </span>
            <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
