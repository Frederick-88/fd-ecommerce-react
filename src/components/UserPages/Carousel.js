import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brochure from "../../assets/Brochure.png";
import Brochure2 from "../../assets/Brochure2.png";
import Brochure3 from "../../assets/Brochure3.png";
import "../Users.css";

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src={Brochure} style={{ width: "90%" }} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Brochure2} style={{ width: "90%" }} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Brochure3} style={{ width: "90%" }} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Brochure} style={{ width: "90%" }} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Brochure2} style={{ width: "90%" }} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <img src={Brochure3} style={{ width: "90%" }} alt="..." />
        </div>
      </Slider>
    );
  }
}
export default Carousel;
