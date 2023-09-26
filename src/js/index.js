import './../css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_xGDfLFniTT6tr6tY8tmuZjE4S0OsQyAvtkgbpFsM9YQRZ17yntwrUZI1YhqdXbcG';
