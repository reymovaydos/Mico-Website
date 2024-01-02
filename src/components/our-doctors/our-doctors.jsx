import React from 'react';
import './our-doctors.scss';
import Team1 from '../../assets/images/team1.jpg'
import Team2 from '../../assets/images/team2.jpg'
import Team3 from '../../assets/images/team3.jpg';
import AliceCarousel from 'react-alice-carousel';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
const handleDragStart = (e) => e.preventDefault();
export const OurDoctors = () => {
  const items = [
    <img width="100%" src={Team2} onDragStart={handleDragStart} />,
    <img width="100%" src={Team3} onDragStart={handleDragStart} />,
    <img width="100%" src={Team1} onDragStart={handleDragStart} />,
  ];
  return (
    <div className='our-doctors' id='our-doctors'>
      <h1>OUR<span> DOCTORS</span></h1>
      <div className="team_carousel">
        <AliceCarousel
          autoPlay
          disableDotsControls
          infinite
          mouseTracking
          autoPlayInterval={2000}
          items={items}
          responsive={
            {
              0: {
                items: 1,
              },
              480: {
                items: 2,
              },
              1024: {
                items: 3,
                itemsFit: 'contain',
              }
            }
          }
        />
      </div>
    </div>
  )
}