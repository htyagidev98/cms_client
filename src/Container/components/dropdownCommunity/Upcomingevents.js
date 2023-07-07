import React, { useEffect, useState } from "react";
import "./upcomingevents.css";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import Footer from "../../common/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardNews, { CardEvent } from "./CardNews";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from '../../assets/event4.jpg';
import event5 from '../../assets/event5.jpg';
import event6 from '../../assets/event6.jpg';
import event7 from '../../assets/event7.jpg';
import event8 from '../../assets/event8.jpg';
import event9 from '../../assets/event9.jpg';
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { ReactComponent as DownArrow } from "../../assets/angle-down-solid.svg";
import galleryImg1 from "../../assets/gallery-1.jpg";
import galleryImg2 from '../../assets/gallery-2.jpg';
import galleryImg3 from '../../assets/gallery-3.jpg';
import galleryImg4 from '../../assets/gallery-4.jpg';
import { BsArrowDown } from "react-icons/bs";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import UpcomingEventFirstSec from "./upcommingevent/UpcomingEventFirstSec";
import UpcomingEventSecondSec from "./upcommingevent/UpcomingEventSecondSec";
import UpcomingEventThirdSec from "./upcommingevent/UpcomingEventThirdSec";
import AddCardUpcomingEventModal from "./upcommingevent/AddCardUpcomingEventModal";
import { useSelector } from "react-redux";
import axios from "axios";
import AddSecondUpcomingEventModal from "./upcommingevent/TestAddSecondUpcomingEventModal";
import TestAddSecondUpcomingEventModal from "./upcommingevent/TestAddSecondUpcomingEventModal";
import { BASE_URL } from "../../../utility/Helper";

const Events = () => {
  const [flag, setFlag] = useState(false);
  const [galleryFlag, setgalleryFlag] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const { contactData } = useSelector((state) => state.contact);
  const [AddCardModal, setAddCardModal] = useState(false);
  const [updateUi, setUpdateUi] = useState(false);
  const [cardData, setCardData] = useState([]);

  // SecondSecapicaling

  const [AddSecCardModal, setAddSecCardModal] = useState(false);

  const [cardSecData, setCardSecData] = useState([]);


  const closeModal = () => {
    setAddCardModal(false);
    setAddSecCardModal(false)
  }

  const showModal = () => {
    setAddCardModal(true)
    
  }

  const showSecModal = () => {
    
    setAddSecCardModal(true)
    
  }


  const fetchHeroData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/upcoming-events/gallery/card/get`)
      setCardData(res.data.responseData);


    } catch (error) {
      //   if(error.response.status === 404){
      //    setCardData([])
      console.log(error);

      // }
    }

  }


  const fetchSecHeroData = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/upcoming-events/event/card/get`);
        setCardSecData(res.data.responseData);
    } catch (error) {
        console.log(error);
    }
};


  const toggleHandler = (e) => {
    setFlag(e.target.checked);
  };

  const galleryFlagHandler = () => {
    setgalleryFlag(prev => !prev);
  }

  useEffect(() => {
    fetchHeroData();
    fetchSecHeroData()
  }, [updateUi])


  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>

      <section className="eventbanner">
        <Container>
          <div className="eventbanner__text">
            <UpcomingEventFirstSec />
          </div>
        </Container>
      </section>

      <section className="eventListing">
        <Container>
          <div className="eventListing__bcrumb">
            <Row>
              <Col md="6">
                <div className="breadcrumb">
                  <span>Location:</span>
                  <ul className="breadcrumbList">
                    <li>
                      <Link>Virtual</Link>
                    </li>
                    <li>
                      <Link>Europe</Link>
                    </li>
                    <li>
                      <Link>North America</Link>
                    </li>
                    <li>
                      <Link>South America</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="6">
                <div className="pastHistorytoggle">
                  <label htmlFor="istoggle">Show past</label>
                  <div className="customToggle">
                    <input
                      type="checkbox"
                      id="istoggle"
                      onChange={toggleHandler}
                    />
                    <label htmlFor="istoggle"></label>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="eventNews">

            <Row>
            {
              contactData.token && <div className='text-end mb-2'><button onClick={() => showSecModal()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
            }
              <UpcomingEventSecondSec flag={flag} cardData={cardSecData}  setUpdateUi={setUpdateUi} />
              {
              AddSecCardModal && <TestAddSecondUpcomingEventModal show={AddSecCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
            </Row>

          </div>
        </Container>
      </section>

      <section className="eventGallery">
        <Container>
          <h2 className="eventHeading">
            <b>Events - </b>Photo Gallery
          </h2>
          <Row>
            {
              contactData.token && <div className='text-end mb-2'><button onClick={() => showModal()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
            }
            <UpcomingEventThirdSec setModalShow={setModalShow} setUpdateUi={setUpdateUi} cardData={cardData} galleryFlag={galleryFlag} />

            {
              AddCardModal && <AddCardUpcomingEventModal show={AddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
            }
          </Row>

          <Row>
            <Col md="12">
              <button className={`${!galleryFlag ? "loadMore" : "loadMore active"}`} onClick={galleryFlagHandler}>
                {galleryFlag ? "Hide" : "Load More"}<DownArrow />
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <footer className="footer_content">
        <Footer />
      </footer>
    </>
  );
};

export default Events;