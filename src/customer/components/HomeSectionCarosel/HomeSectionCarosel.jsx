import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
  return (
    <div className="relative px-4 lg:px-8">
      <h2 className='text2x1 font-extrabold text-grey-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 ' >
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && <Button onClick={slideNext} variant="contained" className='z-50' sx={{
          position: 'absolute', top: "8rem",
          right: "0rem", transform: "translateX(50%) rotate(90deg)"
        }} aria-label='next'>
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
        }

        {activeIndex !== 0 && <Button onClick={slidePrev} variant="contained" className='z-50' sx={{
          position: 'absolute', top: "8rem",
          left: "0rem", transform: "translateX(-50%) rotate(-90deg)"
        }} aria-label='next'>
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>}
      </div>
    </div>
  )
}

export default HomeSectionCarosel;