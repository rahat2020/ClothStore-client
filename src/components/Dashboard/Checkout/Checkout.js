import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const Checkout = () => {
    const [checkout, setCheckout] = useState([])
    console.log(checkout)
    const [loggedInUser] = useContext(UserContext);

    const { productID } = useParams()
    console.log('productID', productID)
    
    const handleSubmit = () => {
        const items = { ...loggedInUser, product: checkout, date: new Date() }
        const url = `http://localhost:5000/itemOrdered`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        alert('item added successfully')
    }

    useEffect(() => {
        const url = `http://localhost:5000/products/${productID}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCheckout(data))
    }, [productID])

   

    return (
        <div className="me-5 p-5 checkout-container">
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h3> Confirm Your Order</h3>
                <h2 style={{ color: '#ddd' }}> id: {productID}</h2>
            </div>
            <div className="">
                <table className="table  table-light " style={{ width: '90%', margin: 'auto' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>images</th>
                            <th>checkout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{checkout.name}</td>
                            <td>{checkout.price}</td>
                            <td className="imgStyle"><img style={{ width: '90px' }} src={checkout.imgURL} rounded alt="" /></td>
                            <td> <Link to={`/order/${productID}`}><button className="height:30px btn btn-primary" onClick={handleSubmit} >Checkout now </button></Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;