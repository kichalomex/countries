import { useState } from "react"
import CountryData from "./CountryData"

const Countries = ({ countriesShow }) => {
    const [country, setCountry] = useState("")

    if (countriesShow.length === 1) {
        return <CountryData country={countriesShow[0]} />
    } else if (countriesShow.length <= 10) {
        return (
            <div>
                {countriesShow.map((country) => (
                    <div key={country.name.official}>
                        {country.name.common}{" "}
                        <button onClick={() => setCountry(country)}>show</button>
                        </div>
                ))}
                {country ? <CountryData country={country} /> : null }
            </div>
        )
    } else if (countriesShow.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
}

export default Countries