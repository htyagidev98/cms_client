import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import {BsArrowRight,BsBoxArrowUpRight,BsDiscord,BsFileArrowDown, BsGithub} from 'react-icons/bs'

import { useSelector } from 'react-redux'
import FourteenthSecBuildDevModal from './FourteenthSecBuildDevModal';

const BuildDevFourteenthSec = () => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [objectData, setObjectData] = useState({})
    const [updateUi, setUpdateUi] = useState(false);

    const closeModal = () => {
        setCardModal(false);
    }

    const fetchHeroData = async () => {
        try {
            const res = await axios.get("/dev/stay/card/get")
            setCardData(res.data.responseData);
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async (data) => {
        setCardModal(true)
        setObjectData(data)
    }


    useEffect(() => {
        fetchHeroData();
    }, [updateUi])

    return (
        <>
            {
                cardData.map((curElm) => <div className="col-lg-3 col-md-2 col-12">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className="date-cards">
                        <div className='d-flex justify-space-between'>
                            {/* <h4><span className="lnr lnr-book"></span> <BsDiscord /> Discord</h4> */}
                            {
                                curElm._id==="6486fd3373b2620de3832cc2"? <BsDiscord />: curElm._id==="6486fd5273b2620de3832cc5"? <BsGithub />:""
                            }
                               
                            <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                            
                             
                            <span className="lnr lnr-move"></span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>

                    </div>
                </div>)
            }

            {
                CardModal && <FourteenthSecBuildDevModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default BuildDevFourteenthSec



