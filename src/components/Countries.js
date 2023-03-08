import CountryData from "./CountryData"

const Countries = ({ countriesShow }) => {
    if (countriesShow.length === 1) {
        return <CountryData country={countriesShow[0]} />
    } else if (countriesShow.length <= 10) {
        return (
            <div>
                {countriesShow.map((country) => (
                    <div key={country.name.official}>{country.name.common}</div>
                ))}
            </div>
        )
    } else if (countriesShow.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
}

export default Countries