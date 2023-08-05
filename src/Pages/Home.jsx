import React from 'react'
import NavBar from '../Components/NavBar'
import Video from '../Components/Video'
import {IoFitnessOutline} from 'react-icons/io5'
import PageAnimation from '../Components/PageAnimation'

function Home() {
  return (
    <>
    <PageAnimation>
    <div className='Container'>
        <NavBar />
        <Video />
        <div className='home-text'>
        A CHANGE IS WHAT YOU NEED <IoFitnessOutline/>
        </div>
    </div>
    </PageAnimation>
    </>
  )
}

export default Home