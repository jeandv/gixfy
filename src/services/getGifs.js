import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {

    const { data = [] } = apiResponse;

    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { id, title, images } = image;
            const { url } = images.downsized_medium;
            return { id, title, url };
        });

        return gifs;
    }
    return []
}

export default function getGifs({ limit = 25, keyword = 'random', page = 0, rating = 'g' } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}