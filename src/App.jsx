
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
    const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json());

  return (
    <>
     <Suspense fallback={<h2>Loading...</h2>}>
     <Countries countriesPromise={countriesPromise}/>

     </Suspense>
     </>
  )
}

export default App
