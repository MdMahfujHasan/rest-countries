document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    loadCountries(inputText);
    inputField.value = '';
})

const searchByRegion = regionName => {
    document.getElementById(regionName).addEventListener('click', function () {
        loadCountries(regionName);
    })
}

searchByRegion('asia');
searchByRegion('america');
searchByRegion('africa');
searchByRegion('europe');
searchByRegion('oceania');

const loadCountries = async searchText => {
    try {
        const url = `https://restcountries.com/v3.1/region/${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayCountries(data);
    }
    catch (error) {
        // console.log(error);
    }
}

const displayCountries = countries => {
    // console.log(countries);
    const countryByRegionContainer = document.getElementById('country-by-region');
    countryByRegionContainer.innerHTML = '';
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `
        <div>
            <div class="bg-rose-50 p-2">
                <h3><b>Name:</b> ${country.name.common}</h3>
                <p><b>Capital: </b>${country.capital[0]}</p>
                <p><b>Population: </b>${country.population}</p>
                <p><b>Independency: </b>${country.independent === true ? 'Independent' : 'Not Independent'}</p>
            </div>
            <img width="250px" src="${country.flags.png}"
        </div>
        `;
        countryByRegionContainer.appendChild(countryDiv);
    });
}