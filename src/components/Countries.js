const Countries = ({ countriesShow, setCountriesShow }) => {
    if (countriesShow.length === 1) return null;

    return countriesShow.map((country) => (
        <div key={country.name.official}>
            {country.name.common}{" "}
            <button onClick={() => setCountriesShow([country])}>show</button>
        </div>
    ))
}
export default Countries