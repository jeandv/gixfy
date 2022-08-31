import React from 'react'
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import Spinner from 'components/Spinner/Spinner';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet'

export default function Home() {
    const { loading, gifs } = useGifs({ keyword: null });

    return (
        <>
            <Helmet>
                <title>Gixfy | Busca tu gifs favoritos!</title>
                {/* <base href='https://gixfy.vercel.app' /> */}
                <link rel='canonical' href='https://gixfy.vercel.app'></link>
                <meta name='description' content='Bienvenido a Gixfy! Encuentra tus gifs favoritos para poder compartirlos, descargarlos y usarlos donde tu quieras!' />
            </Helmet>
            <h1>Home</h1>
            <SearchForm />
            <section>
                <h4>Tu última búsqueda</h4>
                {loading
                    ? <Spinner style={{ marginTop: '10rem' }} />
                    : <ListOfGifs gifs={gifs} />
                }
                <div>
                    <TrendingSearches />
                </div>
            </section>
        </>
    )
}