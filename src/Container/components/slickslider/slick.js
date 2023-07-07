import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Slider from "react-slick";
import SilkModal from './SilkModal'
import { useSelector } from 'react-redux'
import { BASE_URL } from "../../../utility/Helper";

const VerticalMode = () => {

  const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState([]);
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);
 const {contactData} = useSelector((state)=> state.contact);


 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch(`${BASE_URL}/animated/get`)
       const data= await res.json();
       setCardData(data.responseData);

    } catch (error) {
       console.log(error)
    }

 }

  const getData =async(data)=>{
    setCardModal(true)
   setObjectData(data)
  }


 useEffect(()=>{
   fetchHeroData();
 }, [updateUi])

 
 
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    
  };

  


  return (
    <div>
      <Slider {...settings}>

        {
          cardData.map((curElm)=><div className="scrollitem" key={curElm._id}>
            {contactData.token && <span className='d-block text-end cursor' onClick={()=>getData(curElm)}><FaRegEdit /> </span>}

          
            <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
            <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>

            <div className="badge-sec">
              <span className="light-badge">Wallet</span>
            </div>
          </div>)
        }
        
       
      </Slider>

      {
            CardModal && <SilkModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }    </div>
  );
};

export default VerticalMode;
