import { Divider } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tea, {tea} from './Tea'
import './tea.css'


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


const TeaDesc = ({title}) => {
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
                    tea.map((e) => {
                        return (
                            <div className='products_items'>
                                <div className='products_img'>
                                    <img src={e.teaurl} />
                                </div>
                                <p className='products_name'>{e.teatitle.teashortTitle}</p>
                                <p className='products_offer'>{e.teadelivery}</p>
                                <p className='products_expolre'>{e.teatagline}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default TeaDesc