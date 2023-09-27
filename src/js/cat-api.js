import { Notify } from 'notiflix';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_xGDfLFniTT6tr6tY8tmuZjE4S0OsQyAvtkgbpFsM9YQRZ17yntwrUZI1YhqdXbcG';

const errorInfo = document.querySelector('.error');

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => Notify.failure(errorInfo.textContent));
};

export const fetchCatByBreed = breedId => {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(response => {
      return response.data;
    })
    .catch(error => Notify.failure(errorInfo.textContent));
};
