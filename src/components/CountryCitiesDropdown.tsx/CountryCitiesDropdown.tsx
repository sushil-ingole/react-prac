import { useState } from 'react';

const CountryCitiesDropdown = () => {
    const [currentCountryCities, setCurrentCountryCities] = useState<string[]>([]);
    const countries = [
        {
            name: 'India',
            value: 'IN',
            cities: ['Akola', 'Pune', 'Delhi']
        },
        {
            name: 'Pakistan',
            value: 'PAK',
            cities: ['Karachi', 'Lahore', 'Islamabad']
        },
        {
            name: 'South Africa',
            value: 'SA',
            cities: ['Cape town', 'Johannesburg']
        }
    ];
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event?.target?.value) {
            console.log("event.target.value: ", event.target.value);
            setCurrentCountryCities(countries.find((val) => val.value === event.target.value)?.cities || []);
        } else {
            setCurrentCountryCities([]);
        }
    }
    return (
        <div>
            <select name="countries" id="countries" onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries?.length && countries.map((country) => {
                return (
                    <option key={country.value} value={country.value}>{country.name}</option>
                );
            })}
            </select>
            {currentCountryCities?.length > 0 &&
            <select name="cities" id="cities">
                {currentCountryCities.map((city: string) => {
                    return (
                        <option key={city} value={city}>{city}</option>
                    );
                })}
            </select>}
        </div>
    )
}

export default CountryCitiesDropdown;
