import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
  
    // console.log(countriesPromise);

    return (

        <div className="bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
              <div className="lg:container w-full mx-auto  md:px-6 px-4 lg:py-26 md:py-16 py-10 ">

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8'>
            {/* <h1>In the countries: {countries.length}</h1> */}
            {
              countries.map(country => <Country country={country} key={country.cca3.cca3}></Country>)  
            }
        </div>
        </div>
        </div>
      
        
    );
};

export default Countries;