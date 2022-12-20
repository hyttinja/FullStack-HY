
import { useState, useEffect } from 'react';
import Filter from './Filter';
import Countries from './Countries';
import { getAll } from './services/restcountries';


function App() {

  const [countries,setCountries] = useState([])
  const [filter, setFilter] = useState("");

  useEffect(()=>{
    getAll().then(response =>{
      setCountries(response.data);
    })
  },[])

  const filteredCountries = countries.filter(country => country.name.common.includes(filter));
  
  return (
    <div>
      <Filter onChange={(event) => setFilter(event.target.value)} filter={filter}/>
      <Countries filteredCountries={filteredCountries} setFilter={setFilter} />
      <div/>
    </div>
  );
}

export default App;
