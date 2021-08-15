import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Navbar/Navbar';
import './Order.css'
const Order = () => {
    const [order, setOrder] = useState([])
    console.log(order)
    const { productID} = useParams()
    console.log(productID)
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://young-falls-22201.herokuapp.com/orderedItem?email=' + loggedInUser.email)
            .then((response) => response.json())
            .then(data => setOrder(data))
    }, [setOrder])
    return (
        <div className="order-container">
            <Navbar />
            <h3 > Your ordered list</h3>
            <hr/>
            <div className="table-container mt-4 pt-4" style={{width:'80%', margin: 'auto'}}>
               
                <table className="table border" >

                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Price</th>
                            <th>images</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((itemOrder, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{itemOrder.product?.name}</td>
                                    <td>${itemOrder.product?.price}</td>
                                    <td className="imgStyle"><img style={{ height: '50px', width: '100px' }} src={itemOrder.product?.imgURL} alt="" /></td>
                                    <button className="pay-btn">Pay now</button>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Order;