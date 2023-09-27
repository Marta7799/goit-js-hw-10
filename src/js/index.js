import './../css/styles.css';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_xGDfLFniTT6tr6tY8tmuZjE4S0OsQyAvtkgbpFsM9YQRZ17yntwrUZI1YhqdXbcG';

const selectBreed = document.querySelector('.breed-select');
const loaderInfo = document.querySelector('.loader');
const errorInfo = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(
      breeds =>
        (select = new SlimSelect({
          select: '.breed-select',
          data: breeds.map(breed => ({
            text: breed.name,
            value: breed.id,
          })),
        }))
    )
    .catch(error => Notify.failure(errorInfo.textContent));
});

function fetchCatByBreed(breeds) {
  const markup = breeds
    .map(breed => {
      return `<img src="${cat.url}" alt="${cat.breeds[0].name}">
    <div class="description">
        <h2>${cat.breeds[0].name}</h2>
        <p>${cat.breeds[0].description}</p>
        <p>${cat.breeds[0].temperament}</p>
    </div>`;
    })
    .join('');
  catInfo.innerHTML = markup;
}
