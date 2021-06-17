// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// // import { UserContext } from '../../../App';


// const Checkout = () => {
//     const [checkout, setCheckout] = useState([])
//     console.log(checkout)
//     // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     const {_id} = useParams()
//     console.log(_id)

//     const handleSubmit = () => {
//         const items = { ...loggedInUser, product: checkOutDetails, date: new Date() }
//         const url = `https://sleepy-fortress-88910.herokuapp.com/itemOrdered`
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(items)
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
//         alert('item added successfully')
//     }

//     useEffect(() => {
//         const url = `https://sleepy-fortress-88910.herokuapp.com/book`
//          fetch(url)
//         // fetch('https://sleepy-fortress-88910.herokuapp.com/booked')
//             .then(response => response.json())
//             .then(data => setCheckout(data))
//     }, [])
//     const checkOutDetails = checkout.find(pd => pd?._id === _id)
//     console.log(checkOutDetails)
    
//     return (
//         <div className="me-5 p-5">
//             <div style={{ margin: 'auto', textAlign: 'center' }}>
//                 <h3> Confirm your Booking!!!</h3>
//                 {/* <strong>you have checkouted: {checkout.length} items</strong> */}
//             </div>
//             <div className="">
//                 <table class="table bcheckout table-light " style={{width:'90%', margin:'auto'}}>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Description</th>
//                             <th>images</th>
//                             <th>checkout</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>{checkOutDetails?.name}</td>
//                         <td>{checkOutDetails?.description}</td>
//                         <td  className="imgStyle"><img style={{width:'90px'}}src={checkOutDetails?.imgURL} rounded  /></td>
//                         <td> <Link to={`/order/${_id}`}><button className="height:30px btn btn-primary" onClick={handleSubmit} >order now </button></Link></td>
//                     </tr>

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Checkout;