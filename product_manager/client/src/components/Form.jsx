import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Form = (props) => {
    
    const[form, setForm] = useState({
        title: " ",
        price: " ",
        description: " "
    });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/product/new',form)
        .then(res=>setForm(res.data))
        .catch(err=>console.log(err))
    
    }

    const onChangeHandler = (event) => {
        setForm({...form,
            [event.target.name]: event.target.value 
        })
    }


    return (
        <div>
            <form onSubmit = {onSubmitHandler}>
                <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                    <label htmlFor="input" className="py-3 col-sm-3 col-form-label">Title</label>
                    <div className=" py-3 col-sm-8">
                        <input type="text" className="form-control" name="title" onChange={onChangeHandler}  />
                    </div>
                </div>
                <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                    <label htmlFor="input" className=" py-3 col-sm-3 col-form-label">Price</label>
                    <div className=" py-3 col-sm-8">
                        <input type="text" className="form-control" name="price" onChange={onChangeHandler}/>
                    </div>
                </div>
                <div className="d-flex justify-content-center border mx-auto rounded mb-4" style ={{backgroundColor: 'lightgrey', width: "500px"}}>
                    <label htmlFor="input" className=" py-3 col-sm-3 col-form-label">Description</label>
                    <div className="py-3 col-sm-8">
                        <input type="text" className="form-control" name="description" onChange={onChangeHandler} />
                    </div>
                </div>
                <div>
                <input class="btn-lg px-5 btn-info"  type="submit" value="Create"/>
                </div>
            </form>
        </div>
    )
}

export default Form