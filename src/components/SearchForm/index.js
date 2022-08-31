import React, { useState } from 'react'
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({ initialKeyword = '', initialRating = '' }) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
    const [rating, setRating] = useState(initialRating);
    const [path, pushLocation] = useLocation();

    const handleChange = e => {
        setKeyword(e.target.value);
    }

    const handleSubmitSearchForm = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}/${rating}`); // <-- Se navega a otra ruta buscada
        console.log(`Ruta de búsqueda: ${path}`);
    }
    const handleChangeRating = e => {
        setRating(e.target.value);
    }

    return (
        <form onSubmit={handleSubmitSearchForm}>
            <button>Buscar</button>
            <input type='text'
                placeholder='Busca un gif aqui...'
                onChange={handleChange}
                value={keyword}
                required
            />
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating =>
                    <option key={rating}>{rating}</option>
                )}
            </select>
        </form>
    )
}

export default React.memo(SearchForm);