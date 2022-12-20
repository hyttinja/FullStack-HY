const Country = ({country}) =>{
    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
            area {country.area}
            </div>
            <h3>languages:</h3>
            <ul>
            {Object.values(country.languages).map(language =>{
                return(<li>{language}</li>)
            } )}
            </ul>
            <img src={country.flags.svg} alt="flag"/>

        </div>
    )
}
export default Country;