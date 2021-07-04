import React, { useEffect, useState } from 'react';
import './AddAdmin.css'
import axios from 'axios';

const AddAdmin = () => {
    const [service, setService] = useState({
        name: '',
        email: '',
        imgURL: '',
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...service }
        newData[event.target.name] = event.target.value;
        setService(newData);

    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', '10759291b33879b22a499847f44404ca');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...service }
                imgData.imgURL = response.data.data.display_url
                setService(imgData)
                // setImgURL(response.data.data.display_url);
                alert("image added to the database & imgbb");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddAdmin = e => {
        e.preventDefault(true);
        if (service.imgURL !== '') {
            console.log(service)
            const url = `http://localhost:5000/addAdmin`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('Review added to database successfully')

        }

    };
    // adding current admin to the UI
    const [admin, setAdmin] = useState([])
    console.log(admin)
    useEffect(() => {
        const url = `http://localhost:5000/showAdmin`
        fetch(url)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <section>
            <div style={{ position: 'fixed', width: '100%', top: '0' }}>

            </div>
            <div className="mt-3 p-3">
            <h4 className="product-title"> ADD NEW ADMIN</h4>
            <form className="mt-3 border p-4 shadow-sm  form-style">
                <div class="mb-3">
                    <input type="text" class="form-control" onBlur={handleChange} id="exampleInputEmail1" placeholder="Your name" aria-describedby="emailHelp" name="name" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" onBlur={handleChange} placeholder="Your Email" id="exampleInputPassword1" name="email" />
                </div>
                {/* <div class="mb-3">
                    <input type="text" class="form-control" onBlur={handleChange} placeholder="Write comment" id="exampleInputPassword1" name="comment" />
                </div> */}
                <div class="mb-3 form-file">
                    <input type="file" class="form-control" onChange={handleImgUpload} id="formFile" name="img" />
                </div>
                <button type="submit" onClick={handleAddAdmin} class="btn-submit">ADD</button>
            </form>

                <div>
                    <h2 className="" style={{ marginLeft: '240px', fontWeight:"bold", textDecoration:'underline' }}> Current Admin</h2>
                    <table className="table border" style={{ width: '80%', marginLeft: '100px' , fontSize:'20px'}}>

                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center"> Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center"> images</th>
                                <th className="text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admin.map((itemOrder, index) => (
                                    <tr>
                                        <td className="">{index}</td>
                                        <td>{itemOrder.name}</td>
                                        <td>{itemOrder.designation}</td>
                                        <td className="imgStyle"><img style={{ height: '100px', width: '100px' }} src={itemOrder.imgURL} alt="" /></td>
                                        <td><button className="btn">Remove</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default AddAdmin;