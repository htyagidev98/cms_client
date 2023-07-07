import React, { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsBoxArrowUpRight,
  BsDot,
  BsFileArrowDown,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import "./coreteam.css";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import meetus from "../../assets/meet-us.jpeg";
import prize from "../../assets/top25-prize.svg";
import mycompany from "../../assets/my-company.svg";
import adam from "../../assets/cardinal-adam-gagol-bw.jpg";
import cardinal from "../../assets/cardinal.svg";
import career from "../../assets/careers.svg";
import ambassador from "../../assets/ambassadors.png";
import Footer from "../../common/footer/Footer";
import kpt from "../../assets/kpt.svg";
import Boxmodal from "./modal";
import { CarouselItem, Modal } from "react-bootstrap";
import ReactOwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { CCarouselCaption } from "@coreui/react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import pic1 from '../../assets/TeamSlider/pic1.1.svg';
import pic2 from '../../assets/TeamSlider/pic1.2.svg';
import pic3 from '../../assets/TeamSlider/pic1.3.svg';
import pic4 from '../../assets/TeamSlider/pic1.4.svg';
import pic5 from '../../assets/TeamSlider/pic1.5.svg';
import pic6 from '../../assets/TeamSlider/pic1.6.svg';
import pic7 from '../../assets/TeamSlider/pic1.7.svg';
import pic8 from '../../assets/TeamSlider/pic1.8.svg';
import pic9 from '../../assets/TeamSlider/pic1.9.svg';
import pic10 from '../../assets/TeamSlider/pic1.10.svg';


import pic11 from '../../assets/TeamSlider/pic2.1.svg';
import pic12 from '../../assets/TeamSlider/pic2.2.svg';
import pic13 from '../../assets/TeamSlider/pic2.3.svg';
import pic14 from '../../assets/TeamSlider/pic2.4.svg';
import pic15 from '../../assets/TeamSlider/pic2.5.svg';
import pic16 from '../../assets/TeamSlider/pic2.6.svg';
import pic17 from '../../assets/TeamSlider/pic2.7.svg';
import pic18 from '../../assets/TeamSlider/pic2.8.svg';
import pic19 from '../../assets/TeamSlider/pic2.9.svg';
import pic20 from '../../assets/TeamSlider/pic2.10.svg';


import pic21 from '../../assets/TeamSlider/pic3.1.svg';
import pic22 from '../../assets/TeamSlider/pic3.2.svg';
import pic23 from '../../assets/TeamSlider/pic3.3.svg';
import pic24 from '../../assets/TeamSlider/pic3.4.svg';
import pic25 from '../../assets/TeamSlider/pic3.5.svg';
import pic26 from '../../assets/TeamSlider/pic3.6.svg';
import pic27 from '../../assets/TeamSlider/pic3.7.svg';
import pic28 from '../../assets/TeamSlider/pic3.8.svg';
import pic29 from '../../assets/TeamSlider/pic3.9.svg';
import pic30 from '../../assets/TeamSlider/pic3.10.svg';
import CoreTeamFirstSec from "./coreteam/CoreTeamFirstSec";
import CoreTeamSecondSec from "./coreteam/CoreTeamSecondSec";
import CoreTeamThirdSec from "./coreteam/CoreTeamThirdSec";
import CoreTeamFourthSec from "./coreteam/CoreTeamFourthSec";
import CoreTeamFifthSec from "./coreteam/CoreTeamFifthSec";
import axios from "axios";
import { useSelector } from "react-redux";
import AddFifthSecCoreTeamModal from "./coreteam/AddFifthSecCoreTeamModal";
import CoreTeamSixthSec from "./coreteam/CoreTeamSixthSec";
import CoreTeamSeventhSec from "./coreteam/CoreTeamSeventhSec";
import CoreTeamEighthSec from "./coreteam/CoreTeamEighthSec";
import AddEighthSecCoreTeamModal from "./coreteam/AddEighthSecCoreTeamModal";
import EightSecBoxModal from "./coreteam/EightSecBoxModal";
import CoreTeamNinthSec from "./coreteam/CoreTeamNinthSec";
import CoreTeamTenthSec from "./coreteam/CoreTeamTenthSec";
import AddTenthSecCoreTeamModal from "./coreteam/AddTenthSecCoreTeamModal";
import TenthSecBoxModal from "./coreteam/TenthSecBoxModal";
import CoreTeamEleventhSec from "./coreteam/CoreTeamEleventhSec";
import AddEleventhSecCoreTeamModal from "./coreteam/AddEleventhSecCoreTeamModal";
import EleventhSecBoxModal from "./coreteam/EleventhSecBoxModal";
import CoreTeamTwelthSec from "./coreteam/CoreTeamTwelthSec";
import CoreTeamThirteenthSec from "./coreteam/CoreTeamThirteenthSec";
import CoreTeamFourteenthSec from "./coreteam/CoreTeamFourteenthSec";
import { BASE_URL } from "../../../utility/Helper";
const Coreteam = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectModalData, setObjectModalData]=useState({}) 

  const { contactData } = useSelector((state) => state.contact);
  const [AddCardModal, setAddCardModal] = useState(false);

  const [updateUi, setUpdateUi] = useState(false);
  const [cardData, setCardData] = useState([]);

  const [eightSecCardData, setEightSecCardData]= useState([]); 
  const [tenthSecCardData, setTenthSecCardData]= useState([]); 

  const [eightAddCardModal, setEightAddCardModal] = useState(false);
  const [tenthAddCardModal, setTenthAddCardModal] = useState(false);

  const [eightBoxModal, setEightBoxModal]= useState(false) 
  
  const [objectModalDataTwo, setObjectModalDataTwo]=useState({}) 
  const [objectModalDataTenth, setObjectModalDataTenth]=useState({}) 

  const [tenthBoxModal, setTenthBoxModal]= useState(false) 
  
  const [eleventhSecCardData, setEleventhTenthSecCardData]= useState([]); 

  const [eleventhBoxModal, setEleventhBoxModal]= useState(false) 
  
  const [eleventhAddCardModal, setEleventhAddCardModal] = useState(false);

  const [objectModalDataEleventh, setObjectModalDataEleventh]=useState({}) 



  const closeModal = () => {
    setAddCardModal(false);
    setEightAddCardModal(false)
    setTenthAddCardModal(false)
    setEleventhAddCardModal(false)
  }

  const showModalTwo = () => {
    setAddCardModal(true)
  }

  const showModalThree = () => {
    setEightAddCardModal(true)
  }

  const showModalTenth = () => {
    setTenthAddCardModal(true)
  }

  const showModalEleventh = () => {
    setEleventhAddCardModal(true)
  }
   


  const fetchHeroData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/team/founding/card/get`)
      setCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setCardData([])
        console.log(error);

      }
    }

  }


  const fetchHeroDataEightSEc = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/team/cardinal/card/get`)
      setEightSecCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setEightSecCardData([])
        console.log(error);

      }
    }

  }


  const fetchHeroDataTenthSec = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/team/business/card/get`)
      setTenthSecCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setTenthSecCardData([])
        console.log(error);

      }
    }

  }

  const fetchHeroDataEleventhSec = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/team/advisors/card/get`)
      setEleventhTenthSecCardData(res.data.responseData);


    } catch (error) {
      if (error.response.status === 404) {
        setEleventhTenthSecCardData([])
        console.log(error);

      }
    }

  }









  var settings = {
    dots: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: "linear",
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnHover: false
  };
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 4500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: "linear",
    cssEase: "linear",
    waitForAnimate: false,
    rtl: true,
    pauseOnHover: false
  };

  const getModalData=(data)=>{
    setObjectModalData(data)
    setShowModal(true);
  }

  const getModalDataSecond=(data)=>{
    setObjectModalDataTwo(data)
    setEightBoxModal(true);
  }

  const getModalDataTenth=(data)=>{
    setTenthBoxModal(true);
    setObjectModalDataTenth(data)
  }

  const getModalDataEleventh=(data)=>{
    setEleventhBoxModal(true);
    setObjectModalDataEleventh(data)
  }



  useEffect(() => {
    fetchHeroData();
    fetchHeroDataEightSEc();
    fetchHeroDataTenthSec();
    fetchHeroDataEleventhSec();
  }, [updateUi])
  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>

      <div className="mini-banner">
        <div className="custom-wrapper">
          <div className="banner-list">
            <CoreTeamFirstSec />
          </div>
        </div>
      </div>

      <div className="section-padding meet-us-section">
        <div className="custom-wrapper">
          <CoreTeamSecondSec />
        </div>
      </div>
      <div className="mt-3 pb-5 award-section">
        <div className="custom-wrapper">
          <div className="slick-slider t-flex">
            <div className="slider-card ">
              <a href="#">
                <div className="card-detail">
                  <div className="frst-img">
                    <img src={prize} className="img-fluid" />
                  </div>
                  <div className="right-div">
                    <h5>Best Startup</h5>
                    <p>
                      by
                      <img src={mycompany} />
                    </p>
                    <div className="button-hidden">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="slider-card">
              <a href="#">
                <div className="card-detail">
                  <div className="frst-img">
                    <img src={prize} className="img-fluid" />
                  </div>
                  <div className="right-div">
                    <h5>Best Startup</h5>
                    <p>
                      by
                      <img src={mycompany} />
                    </p>
                    <div className="button-hidden">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="slider-card">
              <a href="#">
                <div className="card-detail">
                  <div className="frst-img">
                    <img src={prize} className="img-fluid" />
                  </div>
                  <div className="right-div">
                    <h5>Best Startup</h5>
                    <p>
                      by
                      <img src={mycompany} />
                    </p>
                    <div className="button-hidden">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="slider-card">
              <a href="#">
                <div className="card-detail">
                  <div className="frst-img">
                    <img src={prize} className="img-fluid" />
                  </div>
                  <div className="right-div">
                    <h5>Best Startup</h5>
                    <p>
                      by
                      <img src={mycompany} />
                    </p>
                    <div className="button-hidden">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="static-number-section section-padding">
        <div className="custom-wrapper">

          <div className="row justify-content-center">
            <CoreTeamThirdSec />
          </div>
        </div>
        <div className="gradient-bg-shape"></div>
      </div>

      <div className="section-padding team-section">
        <div className="custom-wrapper">
          <div className="tutorial-small-card">
            <h2 className="side-border my-0">
              <CoreTeamFourthSec />
            </h2>
          </div>

          {
            contactData.token && <div className='text-end mb-2'><button onClick={() => showModalTwo()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
          }

          <div className="pt-5 row">
            <CoreTeamFifthSec gettingData={getModalData} cardData={cardData} setUpdateUi={setUpdateUi} />

            {
              AddCardModal && <AddFifthSecCoreTeamModal show={AddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }


          </div>
        </div>
      </div>

      <div className="research-section">
        <CoreTeamSixthSec />
      </div>

      <div className="cardinal-development section-padding">
        <div className="custom-wrapper">
          <div className="tutorial-small-card mb-5">
           <CoreTeamSeventhSec />
          </div>
          {
            contactData.token && <div className='text-end mb-2'><button onClick={() => showModalThree()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
          }

          <div className="row devlopment-row">
            <CoreTeamEighthSec gettingData={getModalDataSecond} cardData={eightSecCardData} setUpdateUi={setUpdateUi}/>
            {
              eightAddCardModal && <AddEighthSecCoreTeamModal show={eightAddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
          </div>
         
        </div>
      </div>

      <div className="cardinal-development marketing-bussiness section-padding ">
        <div className="custom-wrapper">
          <div className="tutorial-small-card mb-5">
          <CoreTeamNinthSec />
          </div>

          {
            contactData.token && <div className='text-end mb-2'><button onClick={() => showModalTenth()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
          }
          <div className="row devlopment-row">
            <CoreTeamTenthSec gettingData={getModalDataTenth} cardData={tenthSecCardData} setUpdateUi={setUpdateUi} />
            {
              tenthAddCardModal && <AddTenthSecCoreTeamModal show={tenthAddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
          </div>
        
        </div>
      </div>

      <div className="section-padding advisor-section">
        <div className="custom-wrapper">
          <div className="tutorial-small-card">
             <CoreTeamTwelthSec />
          </div>

          {
            contactData.token && <div className='text-end mb-2'><button onClick={() => showModalEleventh()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
          }
         

          <div className="pt-5 row">
            <CoreTeamEleventhSec gettingData={getModalDataEleventh} cardData={eleventhSecCardData} setUpdateUi={setUpdateUi} />

            {
              eleventhAddCardModal && <AddEleventhSecCoreTeamModal show={eleventhAddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
          
          </div>
        </div>
      </div>
      <div className="partners-investor section-padding">
        <div className="custom-wrapper">
          <div className="tutorial-small-card mb-5">
            <h2 className="side-border my-0">
              <b>Partners</b> & <b>investors</b>
            </h2>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Slider {...settings}>
              <div>
                <img src={pic1} width={100} height={100} />
              </div>
              <div>
                <img src={pic2} width={100} height={100} />
              </div>
              <div>
                <img src={pic3} width={100} height={100} />
              </div>
              <div>
                <img src={pic4} width={100} height={100} />
              </div>
              <div>
                <img src={pic5} width={100} height={100} />
              </div>
              <div>
                <img src={pic6} width={100} height={100} />
              </div>
              <div>
                <img src={pic7} width={100} height={100} />
              </div>
              <div>
                <img src={pic8} width={100} height={100} />
              </div>
              <div>
                <img src={pic9} width={100} height={100} />
              </div>
              <div>
                <img src={pic10} width={100} height={100} />
              </div>
            </Slider>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Slider {...settings1} dir="rtl">
              <div>
                <img src={pic11} width={100} height={100} />
              </div>
              <div>
                <img src={pic12} width={100} height={100} />
              </div>
              <div>
                <img src={pic13} width={100} height={100} />
              </div>
              <div>
                <img src={pic14} width={100} height={100} />
              </div>
              <div>
                <img src={pic15} width={100} height={100} />
              </div>
              <div>
                <img src={pic16} width={100} height={100} />
              </div>
              <div>
                <img src={pic17} width={100} height={100} />
              </div>
              <div>
                <img src={pic18} width={100} height={100} />
              </div>
              <div>
                <img src={pic19} width={100} height={100} />
              </div>
              <div>
                <img src={pic20} width={100} height={100} />
              </div>
            </Slider>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Slider {...settings}>
              <div>
                <img src={pic21} width={100} height={100} />
              </div>
              <div>
                <img src={pic22} width={100} height={100} />
              </div>
              <div>
                <img src={pic23} width={100} height={100} />
              </div>
              <div>
                <img src={pic24} width={100} height={100} />
              </div>
              <div>
                <img src={pic25} width={100} height={100} />
              </div>
              <div>
                <img src={pic26} width={100} height={100} />
              </div>
              <div>
                <img src={pic27} width={100} height={100} />
              </div>
              <div>
                <img src={pic28} width={100} height={100} />
              </div>
              <div>
                <img src={pic29} width={100} height={100} />
              </div>
              <div>
                <img src={pic30} width={100} height={100} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="join-us-section section-padding">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="intro-sec ps-md-4 ps-0">
               <CoreTeamThirteenthSec />
                <a href="#" className="mt-4 common-btn">
                  See all job offers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="ms-3 bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={career} />
            </div>
          </div>
        </div>
        <div className="gradient-bg-shape top"></div>
      </div>

      <div className="ambassador-program-section section-padding">
        <div className="custom-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="intro-sec ps-md-4 ps-0">
               <CoreTeamFourteenthSec />
                <a href="#" className="mt-4 common-btn">
                  Learn more
                  <svg
                    className="ms-3"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={ambassador} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <EightSecBoxModal show={eightBoxModal} onHide={() => setEightBoxModal(false)} objectModalData={objectModalDataTwo} />

      <TenthSecBoxModal show={tenthBoxModal} onHide={() => setTenthBoxModal(false)} objectModalData={objectModalDataTenth} />

      <EleventhSecBoxModal show={eleventhBoxModal} onHide={() => setEleventhBoxModal(false)} objectModalData={objectModalDataEleventh} />

      <Boxmodal show={showModal} onHide={() => setShowModal(false)} objectModalData={objectModalData} />
      <footer className="footer_content">
        <Footer />
      </footer>
    </>
  );
};
export default Coreteam;