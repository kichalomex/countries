import React, { useEffect, useState } from 'react'
import axios from 'axios'               
import Countries from './Countries'
import CountryData from './CountryData'

const App = () => {
    const [query, setQuery] = useState("")
    const [countries, setCountries] = useState([])
    const [countriesShow, setCountriesShow] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data)
    })
}, [])

    const handleQueryChange = (event) => {
        const search = event.target.value
        setQuery(search)
        setCountriesShow(
            countries.filter((country) =>
                country.name.common.toLowerCase().includes(search.toLowerCase())
                )
        )
    }

    return (
        <div>
            <div>
                Find countries <input value={query} onChange={handleQueryChange} />
            </div>    
            {countriesShow.length === 1 ? (
                <CountryData country={countriesShow[0]} />
            ) : null}
            {countriesShow.length > 10 ? (
                <div>Too many matches, specify another filter</div>
            ) : (
                <Countries 
                    countriesShow={countriesShow} 
                    setCountriesShow={setCountriesShow}
                />
            )}
        </div>
    )
}

export default App