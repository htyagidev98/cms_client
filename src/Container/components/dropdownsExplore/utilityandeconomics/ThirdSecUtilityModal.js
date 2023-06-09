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
const ThirdSecUtilityModal = ({ show, hide, objectData, setUpdateUi }) => {
    const [inputData, setInputData] = useState({
        id: "",
        title: "",
        content: "",
    });
    // const dispatch = useDispatch()

    const { id } = inputData;
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.put(`${BASE_URL}/utility/count/update?_id=${id}`, inputData);
            if (result.status === 200) {
                toast.success("Successfully Updated")
            }
            hide();
            setUpdateUi((prev) => !prev);
            // dispatch(setEdit())


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
                content: objectData?.content || "",

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
                        <label htmlFor="paragraph">Content</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={inputData.content}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log("Editor is ready to use!", editor);
                            }}


                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setInputData((prevFormData) => ({
                                    ...prevFormData,
                                    content: data,
                                }));
                            }}
                        />
                    </div>

                    <Button variant="primary" type="submit" className='m-2'>
                        Update
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
)
}

export default ThirdSecUtilityModal