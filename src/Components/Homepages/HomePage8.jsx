import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/quotation.png"

function HomePage8() {

    const  data = [
        {
            description: 'Managing Director, Terranz Dubai, UAE We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project.',
            image: `/src/assets/azelit.c51d4d1e_ZFoIpv.jpg`,
            name: 'Vinod MN',
            title: 'Managing Director, AZEL IT Solutions',
        },
        {
            description: 'Ombrullas AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.',
            image: `/src/assets/terranz-other.fe41f67d_Z1IrlCC.jpg`,
            name: 'Joseph',
            title: 'Terranz Dubai, UAE'
        },
        {
            description: 'Ombrullas AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The systems accuracy and real-time insights not only streamline operations but also elevate overall security measures.',
            image: `/src/assets/shipcom.ee1ba5d2_o18LH.jpg`,
            name: 'Quresh Goga',
            title: 'Shipcom wireless'
        },
        {
            description: 'Ombrulla and Green Palm join forces on an AI visual inspection project for ship assessments, utilizing computer vision to detect damages and anomalies. The projects outcomes and the resulting benefits have exceeded our expectations, leaving us highly satisfied with the collaboration.',
            image: `/src/assets/green-palmes.41a0af47_Z1Mo497.jpg`,
            name: 'Manoj Menon',
            title: 'Green Palm'
        },
        {
            description: 'Ombrulla demonstrates how AI could quickly extract value from our data and show significant economic benefits. Ombrulla comes highly recommended by us and we look forward to collaborating with them on future initiatives.',
            image: `/src/assets/planet-fitness.2b86950e_Z1XdacQ.jpg`,
            name: 'Joseph',
            title: 'Planet Fitness'
        },
        {
            description: 'Ombrulla has exceeded our expectations; they are serious and consistent in their job. Ombrulla and their team of programmers have always been available to us. I would suggest this firm to anyone looking for restaurant data analytics solutions.            ',
            image: `/src/assets/wild-leaf.85d7f76f_Z1vakWD.jpg`,
            name: 'Tony Michael',
            title: 'CEO, The Cotillion Hotels, New York, USA'
        },
        {
            description: 'We would like to express our gratitude for the collaboration on the development of our Business Intelligence & Analytics solutions. Ombrulla and its analytics team performed admirably and we are pleased with the solution provided to us.',
            image: `/src/assets/best-western.d33d3fe0_Z2qgqbJ.jpg`,
            name: 'David Thomas',
            title: 'Managing Director Best Western, Kansas, USA.'
        },
        {
            description: 'Ombrullas AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective.',
            image: `/src/assets/terranz-other.fe41f67d_Z1IrlCC.jpg`,
            name: 'James Joseph',
            title: 'Managing Director, Terranz Dubai, UAE'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <>
    <div className="bg-blue-900 pb-24">
        <div className="mx-16 sm:mx-36 pt-16">
            <p className='font-semibold sm:font-bold text-white'><span className='text-blue-500 pr-5'><i class="fa-solid fa-square"></i></span>OUR TESTIMONIALS</p>
            <h1 className='text-white font-semibold text-2xl sm:text-4xl mt-8'>What Customers Say About Us</h1>
        </div>
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings} >
                    {data.map((item) => (
                        <div className='sm:h-[360px] w-[200px] m-5 bg-white text-black rounded-t-2xl'>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <img className='w-5 sm:w-10 mr-48 sm:mr-96 mt-5' src={logo} alt="Loading..." />
                                <p className='px-10 pb-8 text-xs sm:text-base text-slate-600'>{item.description}</p>

                                <div className="flex gap-2 sm:gap-5 items-center w-full bg-blue-200 p-5">
                                    <div className="rounded-xl flex justify-center">
                                        <img className='h-14 sm:h-32 w-14 sm:w-32 rounded-full border border-white' src={item.image} alt="" />
                                    </div>
                                    <div className="">
                                        <p className='font-semibold text-xs sm:text-base'>{item.title}</p>
                                        <p className='text-blue-500 font-bold text-xs sm:text-base'>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage8
