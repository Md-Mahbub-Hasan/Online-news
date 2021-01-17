import React, { useEffect, useState } from 'react';
import './UpdateSlider.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from "react-hook-form";

const UpdateSlider = () => {
    const { register, handleSubmit } = useForm();

    //post images data
    const onSubmit = FormData => {
        console.log(FormData)
        fetch('http://localhost:5050/AddSliderImages', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(FormData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("successfully")
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    //get images data
    const [ImgData, setData] = useState([]);

    useEffect((ImgData) => {
        fetch('http://localhost:5050/allSliderImages')
            .then(res => res.json())
            .then(data => setData(data))
    }, [ImgData])

    //delete images data
    const deleteImage = (_id) => {
        fetch(`http://localhost:5050/ImageDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    //update images data
    // const updateImg = (e, id) => {
    //     fetch(`http://localhost:5050/updateImg/${id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({src: e.value})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             alert('img updated successfully')
    //         }
    //     })
    // }


    return (
        <div className="container">
            <h5>Update Slider images</h5>
            <div className="row">
                {
                    ImgData.map(iData =>

                        <div className="img-card col-md-6">
                            <div key={iData._id} className="row Preview-img-div align-items-center">
                                <div className="col-6">
                                    <img className="img-fluid update-img" src={iData.src} alt="img" />
                                </div>
                                {/* <div className="col-8">
                                    <p className="img-title pl-5 text-center">
                                        <input type="text" onBlur={(e) => { updateImg(e, `${iData._id}`) }} className="form-control img-url-input" placeholder="update img" />
                                    </p>
                                </div> */}
                                <div className="col-6">
                                    <h4 className="img-title text-center">
                                        <DeleteIcon onClick={() => deleteImage(iData._id)} style={{ fontSize: '40px' }} className="deleteImgIcon" />
                                    </h4>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

            <br /><br />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <input type="text" name="src" ref={register} required className="form-control img-url-input" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateSlider;