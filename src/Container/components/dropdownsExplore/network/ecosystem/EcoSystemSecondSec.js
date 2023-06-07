import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import ecolarge from '../../../../assets/eco-large1.jpg'
import ecosmall from '../../../../assets/eco-small.jpg'
import azeroImage from '../../../../assets/azero-id.png'
// import synor from '../../../assets/synor-img.jpg'
import SecondSecEcosystemModal from './SecondSecEcosystemModal';
const EcoSystemSecondSec = () => {
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
            const res = await axios.get("/ecosystem/ecosystemCard/get")
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
            cardData.map((curElm)=> <div className="col-lg-6 col-md-6 col-12">
                  {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
            <div className="large-card-sec">
               <div className="large-img">
                  <img src={curElm._id==="647ee543483431a6baa10ec2"  ? ecolarge : curElm._id==="647ee57c483431a6baa10ec5" ?  azeroImage:null}/>	
               </div>
               <div className="card-bottom-main">
                  <div className="card-bottom-sec d-flex">
                     <div className="img-thumbnail-sec">
                        <img src={ecosmall}/>
                     </div>
                     <div className="thumb-content ms-3 text-white">
                     <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                     <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3"></div>

                     </div>
                  </div>
                  <div  className="custom-badges little-badges mt-4">
                     <ul>
                        <li>Defi</li>
                        <li>Lending and borrwing </li>
                        <li>DAO</li>
                        <li>Ecosystem and Funding program</li>
                     </ul>
                  </div>
                  <div className="learn-more-btn">
                     <button className="transparent-btn">Learn More <span className="lnr lnr-arrow-right"></span></button>
                  </div>
               </div>
            </div>
         </div>)
         }



            {
                CardModal && <SecondSecEcosystemModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default EcoSystemSecondSec



