import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'; 



const AllProducts = (props) => {
    const [products, setProducts] = useState([])

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res=>setProducts(res.data.product))
        .catch(err=>console.log(err))
    })
    return (
        <div>
            <h1 className = "mt-5">All Products:</h1>
                {
                    products.map((item, key) => {
                        return  <div> 
                                    <div className = 'd-flex justify-content-center my-4'>
                                        <div className = "col-form-label col-sm-2">
                                            <a href = {`api/product/${item._id}`} key = {key} > <p>{item.title}</p> </a> 
                                        </div>
                                        <div>
                                            <button class="btn-sm btn-danger" type="submit" onClick ={() => onDeleteHandler(item._id)} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                })  
                }
        </div>
    )
}

export default AllProducts;