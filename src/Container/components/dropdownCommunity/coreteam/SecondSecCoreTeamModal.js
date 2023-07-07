import React, { useEffect, useState } from 'react'

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../../utility/Helper';
const SecondSecCoreTeamModal = ({ show, hide, objectData, setUpdateUi }) => {
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        paragraph: "",
        image: "",
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const { id } = inputData;


    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
        setInputData((prevFormData) => ({
            ...prevFormData,
            image: imageFile,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.put(`${BASE_URL}/team/meet/update?_id=${id}`, inputData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (result.status === 200) {
                toast.success("Successfully Updated")
            }
            hide();
            setUpdateUi((prev) => !prev);


        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        if (objectData != null) {

            setInputData((prevFormData) => ({
                ...prevFormData,

                id: objectData?._id || "",
                title: objectData?.title || "",
                paragraph: objectData?.paragraph || "",
                image: objectData?.image_url || "",
            }));

        }
    }, [objectData])

    return (
        <Modal show={show} onHide={hide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Third Section</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={inputData.title}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setInputData((prevFormData) => ({
                                    ...prevFormData,
                                    title: data,
                                }));
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="paragraph">paragraph</label>
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

                        {selectedImage ? (
                            <img src={URL.createObjectURL(selectedImage)} alt="Selected Image"  />
                        ) : (
                            objectData.image_url  && <img src={objectData.image_url} alt="image_profile" />
                        )}

                    </div>


                    <Button variant="primary" type="submit" className='m-2'>
                        Update
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default SecondSecCoreTeamModal