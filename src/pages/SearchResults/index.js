import React, { useCallback, useEffect, useRef } from 'react'
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from "components/ListOfGifs"
import Spinner from 'components/Spinner/Spinner';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';

export default function SearchResults({ params }) {
    const { keyword, rating = 'g' } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    const title = gifs ? `+${gifs.length} resultados de ${decodeURI(keyword)}` : loading ? '⌛ Cargando...' : '';

    const debounceHandleNextPage = useCallback(
        debounce(
            () => setPage(prevPage => prevPage + 1), 200
        ), [setPage]);

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen]);

    return (
        <>
            {loading
                ? (
                    <Spinner />
                )
                : (
                    <>
                        <Helmet>
                            <title>Gixfy | {title}</title>
                            {/* <base href={`https://gixfy.vercel.app/search/${keyword}`} /> */}
                            <link rel='canonical' href={`https://gixfy.vercel.app/search/${keyword}`}></link>
                            <meta name='description' content={`Bienvenido a Gixfy! Al buscar ${decodeURI(keyword)} se han encontrado ${title}!`} />
                        </Helmet>
                        <SearchForm initialKeyword={keyword} initialRating={rating} />
                        <h3>Resultados de tu busqueda: {decodeURI(keyword)}</h3>
                        <ListOfGifs gifs={gifs} />
                        <div id='visor' ref={externalRef}></div>
                    </>
                )
            }
        </>
    )
}