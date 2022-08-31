import React from 'react'
import { Redirect } from 'wouter';
import useSingleGif from 'hooks/useSingleGif';
import Gif from 'components/Gif/Gif';
import Spinner from 'components/Spinner/Spinner';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });

    const title = gif ? gif.title : isLoading ? '⌛ Cargando...' : '';

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>⌛ Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        );
    }
    if (isError) return <Redirect to='404' />;
    if (!gif) return null;

    return (
        <>
            <Helmet>
                <title>Gixfy | {title}</title>
                {/* <base href={`https://gixfy.vercel.app/gif/${gif.id}`} /> */}
                <link rel='canonical' href={`https://gixfy.vercel.app/gif/${gif.id}`}></link>
                <meta name='description' content={`Bienvenido a Gixfy! Haz dado click a ${title}, puedes compartirlo con tus amigos descargandolo o simplemente copia y envia la URL!`} />
            </Helmet>
            <SearchForm />
            <h3>{gif.title}</h3>
            <Gif {...gif} />
        </>
    )
}