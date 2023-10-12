import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import Navbar from '../../../../navbar/Navbar';
import SubNav from '../../../../subnavbar/SubNav';
import Footer from '../../../../footer/Footer';
import './dryfruits.css'
import "react-multi-carousel/lib/styles.css";
import {dryfruitsdata} from './DryFruits'


const DryFruitsDesc = () => {
    return (
        <>
            <Navbar />
            <SubNav />
            <div className='eproducts_deal'>
                <h3>Dry Fruits</h3>
            </div>
            <div className='eproducts_section'>
                <Divider />
                {
                    dryfruitsdata.map((e) => {
                        return (
                            <div className="products_main">
                                <div className='products_items'>
                                    <div className='products_img'>
                                        <img src={e.url} alt="Product" />
                                    </div>
                                    <strong><p className='products_name'>{e.title.shortTitle}</p></strong>
                                    <p className='products_expolre'>{e.tagline}</p>
                                    <p className='products_price'><span>Cost: </span>₹{e.price.cost} | <span>MRP: </span>₹{e.price.mrp}</p>
                                    <p className='products_offer'>{e.delivery}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}

export default DryFruitsDesc