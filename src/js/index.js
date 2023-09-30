import './../css/styles.css';
import Notiflix, { Notify } from 'notiflix';
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
  Notiflix.Loading.standard(loaderInfo.textContent);
  fetchBreeds()
    .then(breeds => {
      Notiflix.Loading.remove();
      select = new SlimSelect({
        select: '.breed-select',
        data: breeds.map(breed => ({
          text: breed.name,
          value: breed.id,
        })),
      });
    })
    .catch(error => {
      Notiflix.Loading.remove();
      Notify.failure(errorInfo.textContent);
    });
});
const renderBreed = event => {
  Notiflix.Loading.standard(loaderInfo.textContent);
  const breedId = event.target.value;

  fetchCatByBreed(breedId)
    .then(cat => {
      Notiflix.Loading.remove();

      const markup = `<img src="${cat[0].url}" loading="lazy"alt="${cat[0].breeds[0].name}" >
      <div class="description">
         <h2>${cat[0].breeds[0].name}</h2>
         <p>${cat[0].breeds[0].description}</p>
         <p>${cat[0].breeds[0].temperament}</p>
          </div>`;
      catInfo.innerHTML = markup;
      console.log(catInfo);
    })
    .catch(error => {
      Notiflix.Loading.remove();
      Notify.failure(errorInfo.textContent);
    });
};

selectBreed.addEventListener('change', renderBreed);
