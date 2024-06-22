import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import list from '../../public/list.json';
import Cards from './Cards';

function FreeBook() {
    const filterData = list.filter((data)=>data.category==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Discover Free Books</h1>
                    <p>
                        Explore a curated selection of free books available exclusively on our platform. Whether you're a fan of gripping fiction, insightful non-fiction, or captivating biographies, our collection has something to offer every reader. Dive into these compelling stories and enrich your reading experience without any cost.
                        Each book in our free collection is handpicked to provide you with quality content from talented authors across various genres. Take advantage of this opportunity to expand your literary horizons and discover new favorites.
                    </p>
                    
                </div>
                
                <Slider {...settings}>
                    {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default FreeBook;
