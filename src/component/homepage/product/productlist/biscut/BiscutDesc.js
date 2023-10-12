import React from 'react'
import { Divider } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Biscut, {biscutdata} from './Biscut'
import { NavLink } from "react-router-dom";
import './biscut.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const BiscutDesc = ({title}) => {
    return (
        <div className='products_section'>
            <div className='products_deal'>
                <h3>{title}</h3>
            </div>
            <Divider />

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    biscutdata.map((e) => {
                        return (
                            <div className='products_items'>
                                <div className='products_img'>
                                    <img src={e.url} />
                                </div>
                                <p className='products_name'>{e.title.shortTitle}</p>
                                <p className='products_offer'>{e.delivery}</p>
                                <p className='products_expolre'>{e.tagline}</p>
                                <button className='cart_btn1'>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default BiscutDesc