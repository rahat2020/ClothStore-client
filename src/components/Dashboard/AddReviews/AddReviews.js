import React, { useState } from 'react';
import './AddReviews.css'
// import { useLocation } from 'react-router';
import axios from 'axios';
const AddReviews = () => {
    // const location = useLocation
    const [service, setService] = useState({
        name: '',
        designation:'',
        comment: '',
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
                alert("Your Image has been recorded");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddProduct = e => {
        // e.preventDefault(true);
        if (service.imgURL !== '') {
            // console.log(service)
            const url = `http://localhost:5000/UploadReview`
            console.log(url)
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
            alert('You review added successfully')

        }

    };

    return (
        <div className="mt-3">
            <h4 className="product-title"> ADD REVIEW</h4>
            <form className="mt-3 border p-4 shadow-sm  form-style">
                <div class="mb-3">
                    <input type="email" class="form-control" onBlur={handleChange} id="exampleInputEmail1" placeholder="Your name" aria-describedby="emailHelp" name="name" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" onBlur={handleChange} placeholder="Your Designation" id="exampleInputPassword1" name="designation" />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" onBlur={handleChange} placeholder="Write comment" id="exampleInputPassword1" name="comment" />
                </div>
                <div class="mb-3 form-file">
                    <input type="file" class="form-control" onChange={handleImgUpload} id="formFile" name="img" />
                </div>
                <button type="submit" onClick={handleAddProduct} class="btn-submit">Submit</button>
            </form>
        </div>
    );
};

export default AddReviews;