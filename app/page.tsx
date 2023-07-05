import { Hero, SearchBar, CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might be interested</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home_filters-container'>
            <CustomFilter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))} 
            </div>            
          </section>          
        ) :
        (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Ooops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
