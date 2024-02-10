import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/mens_kurta'

export default function HomePage() {
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shoes"}/>
            
        </div>
    </div>
  )
}
