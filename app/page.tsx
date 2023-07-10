"use client";

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home({searchParams}  : HomeProps ) { 
  
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states
  const [fuel, setFuel] = useState<string>("");
  const [year, setYear] = useState<string>("2023");

  // pagination state
  const [limit, setLimit] = useState(10);

  const getAllCars = async () => {    
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '' ,
        year: year || "2023",
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    getAllCars();
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might be interested</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))} 
            </div>   
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image src="/loader.svg" alt='Loading' width={50} height={50} className='object-contain' />
              </div>
            )}
            <ShowMore 
              pageNumber={limit / 10 }
              isNext={limit  > allCars.length}
              setLimit={setLimit}
            />         
          </section>          
        ) :
        (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Ooops, no results</h2>            
          </div>
        )}
      </div>
    </main>
  )
}
