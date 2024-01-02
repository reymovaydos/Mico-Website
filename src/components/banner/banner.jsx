import { Button } from '@mui/material';
import React from 'react';
import sliderImg from '../../assets/images/slider-img.jpg';
import './banner.scss'
import { PlayArrow } from '@mui/icons-material';
export const Banner = () => {
    return (
        <div className="banner" id='banner'>
            <div className="info">
                    <Button className='btn-play-arrow' variant='outlined'>
                        <PlayArrow/>
                    </Button>
                <h1>MICO <span> HOSPITAL</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis provident ullam itaque illum quam vel dolorum reprehenderit perspiciatis quos.</p>
            </div>
            <img src={sliderImg} alt="" />
        </div>
    )
}