import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../../actions/Product';

const Product = ({ productt, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
        <div>
      
      
        <h4>{productt.title}</h4>
        <h4  >{productt.pu}</h4>
        <button  onClick={() => dispatch(deleteProduct(productt._id))}> Delete</button>
        </div>
  );
};

export default Product;
