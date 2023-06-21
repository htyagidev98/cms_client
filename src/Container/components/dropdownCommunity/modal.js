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
import cardinal from "../../assets/cardinal.jpg";


const BoxModal = (props) => {

  const {objectModalData}= props
  console.log('datamodalfsdfsdf', props.objectModalData)

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
      className="modal-outer"
    >


      <Modal.Body>

        <div classname="modal-outer">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12">

              <Slider {...settings}>

                <div class="left-modal-img">
                  <img src={objectModalData.image_url} alt="" />
                </div>
                {/* <div class="left-modal-img">

      <img src={cardinal} alt=""/>
      </div>
			 */}
              </Slider>
            </div>
            <div class="col-lg-6 col-12">
              <Button className="modalClose" onClick={props.onHide}> &#10005; </Button>

              <div class="modal-content-sec">
                <h6>FOUNDING TEAM </h6>
                <div class="d-flex my-3">
                  <span class="common_line"></span>
                  <div class="heading-content ms-2">
                    <div dangerouslySetInnerHTML={{ __html: objectModalData.title }} className="mt-3 "></div>

                      <div dangerouslySetInnerHTML={{ __html:objectModalData.paragraph }} className="mt-3"></div>
                    
                      <div dangerouslySetInnerHTML={{ __html: objectModalData.qualificaton }} className="mt-3 "></div>

                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: props.objectModalData.information }} className="mt-3 "></div>
                    
              </div>

            </div>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default BoxModal;
