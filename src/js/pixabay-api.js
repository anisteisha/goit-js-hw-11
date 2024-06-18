var API_KEY = '44428649-a15122ccea82814442a666457';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
  const data = await response.json();
  return data.hits;
}

