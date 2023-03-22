import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

function TopSlider(){
    const settings={
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return(
        <>
            <Slider {...settings}>
                <div className="wdt">
                    <img className="img" alt="pic1" src={'images/image3.webp'} />
                </div>
                <div className="wdt">
                    <img className="img" alt="pic1" src={'images/image2.webp'} />
                </div>
                <div className="wdt">
                    <img className="img" alt="pic1" src={'images/image1.jpg'} />
                </div>
                <div className="wdt">
                    <img className="img" alt="pic1" src={'images/image4.jpg'} />
                </div>
            </Slider>
        </>
    )
}

export default TopSlider;