import React, {useContext, useEffect, useState } from 'react';
import './Checkout.css';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
// import Navbar from '../../Navbar/Navbar';


const Checkout = () => {
    const [checkout, setCheckout] = useState([])
    console.log(checkout)
    const [loggedInUser] = useContext(UserContext);

    const {_id} = useParams()
    console.log(_id)

    const handleSubmit = () => {
        const items = { ...loggedInUser, product: checkOutDetails, date: new Date() }
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
        const url = `http://localhost:5000/finalOrder`
         fetch(url)
            .then(response => response.json())
            .then(data => setCheckout(data))
    }, [])
    
    const checkOutDetails = checkout.find(pd => pd?._id === _id)
    console.log(checkOutDetails)
    
    return (
        <div className="me-5 p-5 checkout-container">
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h3> Confirm Your Order</h3>
            </div>
            <div className="">
                <table class="table  table-light " style={{width:'90%', margin:'auto'}}>
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
                        <td>{checkOutDetails?.name}</td>
                        <td>{checkOutDetails?.price}</td>
                        <td  className="imgStyle"><img style={{width:'90px'}}src={checkOutDetails?.imgURL} rounded  alt=""/></td>
                        <td> <Link to={`/order/${_id}`}><button className="height:30px btn btn-primary" onClick={handleSubmit} >order now </button></Link></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;