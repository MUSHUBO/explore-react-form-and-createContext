import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState();

    const handleProductSubmit = (e) => {
        
        e.preventDefault();
        const name =e.target.name.value;
        const price =e.target.price.value;
        const quantity =e.target.quantity.value;

        // console.log(name, price, quantity);
        // validation
        if(name.length === 0){
            setError('Please provide a Product-Name.');
            return;
        } 
        else if(price.length === 0){
            if(parseFloat(price) < 0){
                setError('Price can not be Negative')
            }
            setError('Please provide a Price.');
            return;
        }
        else if(quantity.length === 0){
            setError('Please provide a Quantity');
            return;
        }
        else {
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct)
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name'/>
                <br />
                <input type="text" name='price' placeholder='Product Price'/>
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity'/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'brown'}}>
                <h6>{error}</h6>
            </p>
        </div>
    );
};

export default ProductForm;