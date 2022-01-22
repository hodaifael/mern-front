import React, { useState, useEffect } from 'react';
import img1 from './images/img1.jpg';
import Form from './components/Form/form'
import Products from './components/products/products'
import { useDispatch } from 'react-redux';
import { getProducts } from './actions/Product';

const App = ()=>{
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
      }, [currentId, dispatch]);
    
    return(
        <div>
            <h1>App</h1>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Products setCurrentId={setCurrentId}/>
        </div>
    )
}


export default App;