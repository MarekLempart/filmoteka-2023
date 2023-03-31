// Тут будуть імпортуватись:
// 1. Рендер карток фільму.
// 2. Пошук по ключовому слову.
// 3. Відкирття та закриття модалки.
// 4. Модалка учасників команди.

// import './js/api';
import './js/trailer';
import * as customComponent from './js/custom-components';
import * as renderingMovieCards from './js/rendering-movie-cards';
import * as searchByKeyword from './js/search-by-keyword';
import * as openModal from './js/open-and-close-modal';
import * as teamModal from './js/team-load-to-modal';
import * as galleryMarkup from './js/create-gallery-markup';
import { refs } from './js/refs';
import { onBtnPageClick } from './js/pagination';

refs.pagination.addEventListener('click', onBtnPageClick);
