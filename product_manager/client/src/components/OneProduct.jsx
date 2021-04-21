import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'; 
import {navigate} from '@reach/router'


const OneProduct = (props) => {
    const [singleProduct, setSingleProduct] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`  )
        .then(res=>setSingleProduct(res.data.product))
        .catch(err=>console.log(err))
    });

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/')
    }

    const onClickHandler = (id) => {
        setSingleProduct({...singleProduct})
        navigate(`update/${id}`)
    }
    

    return (
        <div>
            <h1 className = 'mt-5'>{singleProduct.title}</h1>
            <h4 className = 'my-5'>Price: {singleProduct.price}</h4>
            <h4 className = ''>Description: {singleProduct.description}</h4>
            <di className = 'd-flex justify-content-center mt-5'>
                <div className = "mx-3">
                    <button class="btn btn-danger" type="submit" onClick ={() => onDeleteHandler(props.id)} >Delete</button>
                </div>
                <div className = "mx-3">
                    <button class="btn btn-warning" type="submit" onClick ={() => onClickHandler(props.id)}>Edit</button>
                </div>
            </di>
        </div>
    )
}

export default OneProduct;