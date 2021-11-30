// import React, { useState, useContext } from 'react';
// import './Login';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../firebase.config';
// import { UserContext } from '../../../App';
// import { useHistory, useLocation } from 'react-router';
// import Navbar from '../../Navbar/Navbar';


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }
// const Login = () => {
//     const [loggedInUser,setLoggedInUser] = useContext(UserContext);
//     const history = useHistory()
//     const location = useLocation()
//     let { from } = location.state || { from: { pathname: "/" } };

//     const [newUser, setNewUser] = useState(false)
//     const [user, setUser] = useState({
//         isSignedIn: false,
//         newUser: false,
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//     })

//     const provider = new firebase.auth.GoogleAuthProvider();
//     const handleGoogleSignIn = () => {
//         firebase.auth().signInWithPopup(provider)
//             .then(res => {
//                 const { displayName, email, photoURL } = res.user;
//                 const signedInUser = {
//                     isSignedIn: true,
//                     name: displayName,
//                     email: email,
//                     photo: photoURL
//                 }
//                 setUser(signedInUser)
//                 setLoggedInUser(signedInUser)
//                 history.replace(from);
//                 console.log(displayName, email, photoURL);
//             })
//             .catch(error => {
//                 console.log(error);
//                 console.log(error.message);

//             })
//     }

//     const handleGoogleSignOut = () => {
//         firebase.auth().signOut()
//             .then(() => {
//                 const signOutUser = {
//                     isSignedIn: false,
//                     name: '',
//                     photo: '',
//                     email: '',
//                     error: '',
//                     success: false
//                 }
//                 setUser(signOutUser)
//             })
//             .catch(err => {
//                 console.log(err);
//                 console.log(err.message);
//             })
//     }

//     const handleBlur = (e) => {
//         console.log(e.target.name, e.target.value);
//         let isFormedValid = true;
//         if (e.target.name === 'email') {
//             isFormedValid = /\S+@\S+\S+/.test(e.target.value);
//             const isEmailValid = /\S+@\S+\S+/.test(e.target.value);
//             console.log(isEmailValid);
//         }
//         if (e.target.name === 'password') {
//             const isPasswordValid = e.target.value.length > 6;
//             const passwordHasNumber = /\d{1}/.test(e.target.value);
//             isFormedValid = isPasswordValid && passwordHasNumber;
//             console.log(isPasswordValid && passwordHasNumber);
//         }
//         if (isFormedValid) {
//             debugger;
//             const newUserInfo = { ...user }
//             newUserInfo[e.target.name] = e.target.value;
//             setUser(newUserInfo);
//         }
//     }
//     const handleSubmit = (e) => {
//         if (newUser && user.email && user.password) {
//             firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//                 .then((res) => {
//                     const newUserInfo = { ...user }
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     setLoggedInUser(newUserInfo);
//                     history.replace(from);
//                     console.log(res)

//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                       var errorCode = error.code;
//                       var errorMessage = error.message;
//                      console.log(errorCode, errorMessage);
//                 });

//         }
//         if (!newUser && user.email && user.password) {
//             firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//                 .then((res) => {
//                     const newUserInfo = { ...user }
//                     newUserInfo.error = '';
//                     newUserInfo.success = true;
//                     setUser(newUserInfo);
//                     console.log(res)

//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user };
//                     newUserInfo.error = error.message;
//                     newUserInfo.success = false;
//                     setUser(newUserInfo);
//                 });
//         }
//         e.preventDefault();
//     }

//     const loginForm = {
//         marginLeft: '300px',
//         width: '40%'
//     }
//     const btnStyle = {
//         marginLeft: '30px',
//         backgroundColor: 'tomato',
//         color: 'black'
//     }

//     return (
//         <div className="login">
//             <Navbar />
//             <div className="container">
//                 <div className="mt-3 ">
//                     <form className="mt-3 border p-4 shadow-sm" style={loginForm} >
//                         <h2 className="title">Cloth<span className="title-half">Store</span></h2>

//                         <div className="d-flex justify-content-between align-items-center sign-google p-1 mb-3" onClick={handleGoogleSignIn}>
//                             <img style={{ borderRadius: '30%', cursor: 'pointer', width: '50px' }}
//                                 src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" alt="" />
//                             <h5 className="google-text">sign in with google</h5>
//                         </div>

//                         {
//                             newUser && <div className="mb-3 mt-4">
//                                 <input type="text" className="form-control" onBlur={handleBlur}
//                                     placeholder="Your name" aria-describedby="emailHelp" name="name" required />
//                             </div>
//                         }
//                         <div className="mb-3">
//                             <input type="email" className="form-control" onBlur={handleBlur} placeholder="Your email" name="email" required />
//                         </div>
//                         <div className="mb-3">
//                             <input type="password" className="form-control" onBlur={handleBlur} placeholder="your password"
//                                 name="password" required />
//                         </div>
//                         <button type="submit" className="text-center login-btn" style={{ btnStyle }} onSubmit={handleSubmit}>Submit</button>

//                         <div className="a mt-3">
//                             {
//                                 newUser ? 'already have an account?' : "Don't have an account? "
//                             }

//                             <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer' }}>
//                                 {
//                                     newUser ? 'login' : 'sign up'
//                                 }
//                             </span>

//                         </div>
//                     </form>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Login;