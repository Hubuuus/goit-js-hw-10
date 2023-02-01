import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { countryListElement } from './index';
import { countryInfoDetails } from './index';
export const fetchCountries = name => {
    console.log(name);
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    )
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => {
        console.log(json);
        console.log(json.length);
        if (json.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (json.length <= 10 && json.length > 1) {
          Notify.info('The following matches were found.');
          json.forEach(country => {
            // Lists up to 10 countries that match entered value
            countryListElement(country);
          });
        } else if (json.length === 1) {
          Notify.info('The following match was found.');
          json.forEach(country => {
            // Creates html element for country with more detailed information
            countryInfoDetails(country);
          });
        } else {
          Notify.failure('Oops, there is no country with that name');
        }
      })
      .catch(() => Notify.failure('Oops, there is no country with that name'));
  };
  
  