import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Navbar/Navbar';
import './Order.css'
const Order = () => {
    const [order, setOrder] = useState([])
    const [loggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orderedItem?email=' + loggedInUser.email)
            .then((response) => response.json())
            .then(data => setOrder(data))
    })
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
                            <th>Description</th>
                            <th>images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((itemOrder, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{itemOrder.product?.name}</td>
                                    <td>{itemOrder.product?.price}</td>
                                    <td className="imgStyle"><img style={{ height: '100px', width: '200px' }} src={itemOrder.product?.imgURL} alt="" /></td>
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