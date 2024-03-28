import allProducts from "../data/allProducts.js";
import SingleProduct from "./SingleProduct.jsx";

const Products = ({ category }) => {

    let filteredProducts;
    if (category) {
        filteredProducts = allProducts.filter(product => product.category === category);
        if (category === 'all') {
            filteredProducts = allProducts;
        }
    }

    return (
        <>
            {
                category ?
                    filteredProducts.map((product, idx) => <SingleProduct key={idx} product={product} />) :
                    allProducts.map((product, idx) => <SingleProduct key={idx} product={product} />)
            }
        </>
    );
};

export default Products;