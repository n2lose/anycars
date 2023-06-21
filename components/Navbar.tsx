import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center s:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center' >
                <Image src="/logo.svg" 
                    alt='AnyCar Logo'
                    width={118}
                    height={118}
                    className='object-contain'
                />
            </Link>
                            
            <CustomButton 
                    label='Sign In'
                    type='button'
                    mainClass='text-primary-blue bg-white hover:secondary-orange rounded-full min-w-[130px] py-2'
                />
        </nav>
    </header>
  )
}

export default Navbar