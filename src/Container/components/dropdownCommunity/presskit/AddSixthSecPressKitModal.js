import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import { setEdit } from '../../../redux/slice/ContactSlice';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../../utility/Helper';
const AddSixthSecPressKitModal = ({ show, hide, setUpdateUi }) => {
    const [inputData, setInputData] = useState({
        id: "",
        year: "",
        date:"",
        paragraph: "",
        image: "",

    });

    const [selectedImage, setSelectedImage] = useState(null);
      

    const {year, date, paragraph, image} = inputData;


    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile)
        setInputData((prevFormData) => ({
            ...prevFormData,
            image: imageFile,
        }));
    };
    


    const handleSubmit = async (e) => {
        console.log('year', year);
        e.preventDefault()
        if (!year || !paragraph || !image || !date) {
            toast.error('please fill the data')
        }
        try {
            const result = await axios.post(`${BASE_URL}/press/press/news/add`, inputData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log('add data', result)
            if (result.status === 200) {
                toast.success('Card Added Successfully');
            }

            hide();
            setUpdateUi((prev) => !prev);

        } catch (error) {
            console.log(error);
        }


    }




    return (
        <Modal show={show} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Driving</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Year</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={inputData.year}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setInputData((prevFormData) => ({
                                    ...prevFormData,
                                    year: data,
                                }));
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Date</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={inputData.date}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setInputData((prevFormData) => ({
                                    ...prevFormData,
                                    date: data,
                                }));
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="paragraph">Paragraph</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={inputData.paragraph}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                            }}


                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setInputData((prevFormData) => ({
                                    ...prevFormData,
                                    paragraph: data,
                                }));
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            onChange={handleImageChange}

                        />
                    </div>

                    <div className="mt-2 ecosystem_update_image">
                        {selectedImage && 
                            <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
}
                    </div>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default AddSixthSecPressKitModal