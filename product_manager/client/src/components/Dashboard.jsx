import React from 'react';
import AllProducts from './AllProducts';
import Form from './Form'


const Dashboard= (props) => {
    return(
        <div>
            <h1 className= "my-5">Product Manager</h1>
                <Form path = "/api/product/new"/>
                <AllProducts path = "/api/product"/>
        </div>
    )
}

export default Dashboard