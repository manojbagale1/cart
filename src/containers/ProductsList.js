import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "../components/ProductComponent";

const ProductPage = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;