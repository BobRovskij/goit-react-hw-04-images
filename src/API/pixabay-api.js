import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '23090383-e81f8e634e4c6b35c8c9f1295';
    
async function fetchImages(query, pageNumber) {
    try {
        const fetchUrl = `${BASE_URL}?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
        const response = await axios.get(fetchUrl);

        if (response) {
            return response.data;
        }

        return Promise.reject(
            new Error('Oops! No matches found.'),
        );

    } catch (error) {
        return error;
    }           
};

export const pixabayAPI = {
    fetchImages,
};