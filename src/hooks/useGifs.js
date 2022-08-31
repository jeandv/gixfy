import { useContext, useEffect, useState } from 'react'
import GifsContext from 'context/GifsContext';
import getGifs from 'services/getGifs';

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifsContext);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                if (keyword) localStorage.setItem('lastKeyword', keyword);
            });

    }, [keyword, keywordToUse, setGifs, rating])

    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, page, rating })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            })

    }, [keywordToUse, page, setGifs, rating]);

    return { loading, loadingNextPage, gifs, setPage }
}