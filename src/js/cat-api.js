import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_xGDfLFniTT6tr6tY8tmuZjE4S0OsQyAvtkgbpFsM9YQRZ17yntwrUZI1YhqdXbcG';

export const fetchBreeds = () => {
  return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchCatByBreed = breedId => {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
