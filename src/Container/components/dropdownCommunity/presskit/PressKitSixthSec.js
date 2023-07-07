import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import { BiCopy, BiLinkExternal } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../../utility/Helper';

// import SixthSecPressKitModal from './SixthSecPressKitModal';

const PressKitSixthSec = ({ cardData, setUpdateUi }) => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [objectData, setObjectData] = useState({})
    console.log('carddaaa', cardData);
    // const closeModal = () => {
    //     setCardModal(false);
    // }


    const trashData = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/press/press/news/delete?_id=${id}`);
            if (response.status === 200) {

                toast.success('Card Deleted Successfully');
                setUpdateUi((prev) => !prev)

            }
        } catch (error) {
            console.error(error);
        }

    }

    const trashDataTwo = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/press/press/news/delete?newsDataId=${id}`);
            if (response.status === 200) {

                toast.success('Card Deleted Successfully');
                setUpdateUi((prev) => !prev)

            }
        } catch (error) {
            console.error(error);
        }


    }



    // const getData = async (data) => {
    //     console.log('click data', data)
    //     setCardModal(true)
    //     setObjectData(data)
    // }




    return (
        <>
            {
                cardData && cardData.length > 0 ?
                    cardData?.map((curElm, index) => {
                        const { newsData } = curElm;
                        return (
                            <>
                                <div className="col-md-8 margin_auto right-text">

                                  { curElm.newsData.length>0 &&  <div>
                                        {
                                            contactData.token && <span className='d-block text-end cursor text-white'>  <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                                        }



                                        <div dangerouslySetInnerHTML={{ __html: curElm.year }} className="text-white"></div>

                                    </div>

                    }
                                    {
                                        newsData.map((elm) => {
                                            return (
                                                <>
                                                    <div className="date-list-div">
                                                        {
                                                            contactData.token && <span className='d-block text-end cursor text-white'>  <RxCross2 onClick={() => trashDataTwo(elm._id)} /> </span>
                                                        }
                                                        <div className="date-list">
                                                            <div dangerouslySetInnerHTML={{ __html: elm.date }} className="text-white"></div>

                                                            <div className="logo-img">
                                                                <img src={elm.image_url} />
                                                            </div>
                                                            <div dangerouslySetInnerHTML={{ __html: elm.paragraph }} className="text-white"></div>
                                                        </div>

                                                    </div>

                                                </>
                                            )
                                        })
                                    }

                                </div>
                            </>
                        )
                    }) : ""
            }



            {/* {
                CardModal && <SixthSecPressKitModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            } */}
        </>
    )
}

export default PressKitSixthSec



