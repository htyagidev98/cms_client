import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Slider from "react-slick";



const TenthSecBoxModal = (props) => {

    const { objectModalData } = props

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
                            </Slider>
                        </div>
                        <div class="col-lg-6 col-12">
                            <Button className="modalClose" onClick={props.onHide}> &#10005; </Button>

                            <div class="modal-content-sec">
                                <h6>CARDINAL / DEVELOPMENT</h6>
                                <div class="d-flex my-3">
                                    <span class="common_line"></span>
                                    <div class="heading-content ms-2">
                                        <div dangerouslySetInnerHTML={{ __html: objectModalData.title }} className="mt-3 "></div>

                                        <div dangerouslySetInnerHTML={{ __html: objectModalData.paragraph }} className="mt-3"></div>


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
export default TenthSecBoxModal;
