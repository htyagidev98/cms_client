import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './MyVerticallyCenteredModal.css'
import { ReactComponent as LinkArrow } from "../../assets/box-arrow-up-right.svg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from '../../assets/slider1/slider1.jpg';
import slider2 from '../../assets/slider1/slider2.jpg';
import slider3 from '../../assets/slider1/slider3.jpg';
import slider4 from "../../assets/slider1/slider4.jpg";
const MyVerticallyCenteredModal =(props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="customModal"
    >
      <Modal.Body>
        <div className="wrap-modal-slider">
          <div className="modalItem">
            <div className="modalSlider">
            <Slider {...settings}>
            <div>
              <img src={slider1} alt="slider1"/>
            </div>
            <div>
            <img src={slider2} alt="slider2"/>
            </div>
            <div>
            <img src={slider3} alt="slider3"/>
            </div>
            <div>
            <img src={slider4} alt="slider3"/>
            </div>
          </Slider>
            </div>
          </div>

          <div className="modalCaption">
            <small>EVENTS - PHOTO GALLERY</small>
            <Button className="modalClose" onClick={props.onHide}> &#10005; </Button>
            <div className="modalHeading">
              <h3>Crypto Rockstars Cruise</h3>
              <p>Cologne, Germany</p>
              <span>May 4-6, 2023</span>
            </div>
            <div className="modal__content">
              <p>
                The mission of Crypto Rockstars since 2018 is to educate people
                about current economic trends, social changes and opportunities
                that blockchain technology offers us.
              </p>
            </div>
            <div>
            <Button className="modalBtn">Event page <LinkArrow/></Button>
            </div>
            <div>
           
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
