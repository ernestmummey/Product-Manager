import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'


const EditProducts = (props) => {
    const [singleProduct, setSingleProduct] = useState([])
    // const[form, setForm] = useState({
    //     title: " ",
    //     price: " ",
    //     description: " "
    // });


    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${props.id}`,singleProduct)
        .then(res=>setSingleProduct(res.data))
        .catch(err=>console.log(err))
        navigate('/')
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`  )
        .then(res=>setSingleProduct(res.data.product))
        .catch(err=>console.log(err))
    },[props.id])


    const onChangeHandler = (event) => {
        setSingleProduct({...singleProduct,
            [event.target.name]: event.target.value 
        })
        console.log(singleProduct)
    }
        


    return (
        <div>
            <h1 className ='mt-5'>Edit your Product</h1>
            <div className ="mt-5">
                <form onSubmit = {onSubmitHandler}>
                    <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                        <label htmlFor="input" className="py-3 col-sm-3 col-form-label">Title</label>
                        <div className=" py-3 col-sm-8">
                            <input type="text" className="form-control" name="title" onChange={onChangeHandler} value = {singleProduct.title}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                        <label htmlFor="input" className=" py-3 col-sm-3 col-form-label">Price</label>
                        <div className=" py-3 col-sm-8">
                            <input type="text" className="form-control" name="price" onChange={onChangeHandler} value = {singleProduct.price} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                        <label htmlFor="input" className=" py-3 col-sm-3 col-form-label">Description</label>
                        <div className="py-3 col-sm-8">
                            <input type="text" className="form-control" name="description" onChange={onChangeHandler} value = {singleProduct.description}/>
                        </div>
                    </div>
                    <div>
                    <input className="btn-lg px-5 btn-warning"  type="submit" value="Edit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProducts