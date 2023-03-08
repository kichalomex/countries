import React, { useEffect, useState } from 'react'
import axios from 'axios'               
import Countries from './Countries.js'

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
            <Countries countriesShow={countriesShow} />
        </div>
    )
}

export default App