import React from 'react';
import Product from './product/product'
import { useSelector } from 'react-redux';

const Products = ({setCurrentId})=>{
    const products = useSelector((state) => state.productsReducer);

    return(
        
            <div> 
            {products.map((product) => (
                <Product productt={product} setCurrentId={setCurrentId} />
            ))}
             </div>
        
    );
};

export default Products;