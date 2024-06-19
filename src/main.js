import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  showLoader();
  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(images, gallery);
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images!',
    });
  } finally {
    hideLoader();
  }
});

console.log('iziToast loaded:', typeof iziToast !== 'undefined');
console.log('SimpleLightbox loaded:', typeof SimpleLightbox !== 'undefined');
