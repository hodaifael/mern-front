import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createProduct, updateProduct } from '../../actions/Product';

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setproductData] = useState({ title: '', pu: ''});
  const product = useSelector((state) => (currentId ? state.productsReducer.find((title) => title._id === currentId) : null));
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (product) setproductData(product);
  }, [product]);

  
  const clear = () => {
    setCurrentId(0);
    setproductData({ title: '', pu: '' });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
        dispatch(createProduct(productData));
        clear();
      } else {
        dispatch(updateProduct(currentId, productData));
        clear();
      }
    
  };

  return (
      <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <input name="title"      value={productData.title} onChange={(e) => setproductData({ ...productData, title: e.target.value })} />
        <input name="pu"    value={productData.pu} onChange={(e) => setproductData({ ...productData, pu: e.target.value })} />
        <button  type="submit" fullWidth>Submit</button>
        <button  onClick={clear} fullWidth>Clear</button>
      </form>
  );
};

export default Form;
