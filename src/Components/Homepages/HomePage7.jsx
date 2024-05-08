import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/best-western.d33d3fe0_Z2qgqbJ.jpg"
import img2 from "../../assets/dubai-festival-city.jpg"
import img3 from "../../assets/wild-leaf.jpg"
import img4 from "../../assets/emirates.jpg"
import img5 from "../../assets/burger-king.jpg"
import img6 from "../../assets/damac.jpg"
import img7 from "../../assets/planet-fitness.jpg"
import img8 from "../../assets/suja.jpg"
import img9 from "../../assets/azelit.jpg"

function HomePage7() {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true
      };
  return (
    <>
    <div className="sm:w-[900px] py-10 m-auto">
        <div className="">
            <p className='flex items-center gap-8 font-bold justify-center'>
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
                OUR CUSTOMERS
                <span className='text-blue-500 text-xs'><i class="fa-solid fa-square"></i></span>
            </p>
            <h1 className="font-semibold text-3xl sm:text-5xl mb-28 mt-5 text-center">They Trust Us</h1>
        </div>
      <Slider {...settings}>
        <div>
          <img className="w-32" src={img1} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img2} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img3} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img4} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img5} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img6} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img7} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img8} alt="Loading..." />
        </div>
        <div>
          <img className="w-32" src={img9} alt="Loading..." />
        </div>
      </Slider>
    </div>
    </>
  )
}

export default HomePage7
