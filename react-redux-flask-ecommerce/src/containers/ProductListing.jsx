import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts, fetchProducts} from "../redux/actions/productsActions";
// import axios from "axios";

const ProductListing = () => {
    
    const products = useSelector((state) => state);
    
    const dispatch = useDispatch();
    
//     const fetchProducts = async () => {
        
//         const response = await axios.
//         get('https://fakestoreapi.com/products')
//         .catch((err) => {
//             console.log("ERROR", err);
//         });
        
//         console.log(response.data);
        
//         dispatch(setProducts(response.data));
//     };
    
    React.useEffect(() => {
//         fetchProducts();
        
        dispatch(fetchProducts());
                           
                          }, []);
    
    console.log("All Products :", products.allProducts.products[0]);
    
    return (
    
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    
    
    );
};

export default ProductListing;