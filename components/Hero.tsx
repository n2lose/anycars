'use client';

import Image from 'next/image'
import CustomButton from './CustomButton'

type Props = {}

const Hero = (props: Props) => {

  const handleClicked = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book or rent a car quicly and easily</h1>
        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton           
          type={"button"}          
          label='Explore Cars' 
          mainClass='custom-btn'
          additionalClass='bg-primary-blue text-white hover:bg-blue-500 rounded-full mt-10'
          handleOnClicked={handleClicked} 
          disabled={false} 
         />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='Hero' fill className='object-contain' />
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  )
}

export default Hero