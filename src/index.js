let _ = require('lodash');

import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input',  _.debounce(() => {
  fetchCountries(searchBox.value.trim());
  countryList.innerHTML = " "
  countryInfo.innerHTML = " "
}, DEBOUNCE_DELAY)
);

export const countryListElement = country => {
  countryList.insertAdjacentHTML(
    'beforeend',
    `
  <li class="country-list__element">
    <img src="${country.flags.svg}" alt="${country.flags.svg}"/>
    <p>${country.name.common}</p>
   </li>`
  );
};

export const countryInfoDetails = country => {
  countryInfo.innerHTML = `
  <img src="${country.flags.svg}" alt="${country.flags.svg}"/>
  <h2>${country.name.common}</h2>
  <p><span class="bold">Capital:</span> ${country.capital}</p>
  <p><span class="bold">Population:</span> ${country.population}</p>
  <p><span class="bold">Languages:</span> ${Object.values(country.languages)}</>
  `;
};


