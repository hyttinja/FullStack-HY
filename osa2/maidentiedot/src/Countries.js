import Country from './Country';
const Countries = ({filteredCountries,setFilter}) =>{
    if(filteredCountries.length > 10){
        return(
            <div>
                Too many countries
            </div>
        )
    }
    else if(filteredCountries.length > 1){
        return(
        <ul>
            {filteredCountries.map(country => <li key={country.area}>{country.name.common}<button onClick={()=>setFilter(country.name.common)}>show</button></li>)}
        </ul>
        )
    }
    else if( filteredCountries.length === 1){
        return (
            <Country country={filteredCountries[0]}/>
        )
    }
    else{
        return(
            <div>
                No country by that name
            </div>
        )
    }

}
export default Countries;