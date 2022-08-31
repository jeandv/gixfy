import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data } = apiResponse;
    const { id, title, images } = data;
    const { url } = images.downsized_medium;
    return { id, title, url };
}

export default function getSingleGif({ id }) {
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}