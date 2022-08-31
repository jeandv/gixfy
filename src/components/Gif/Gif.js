import React from 'react'
import { Link } from 'wouter'

function Gif({ id, title, url }) {

    const linkToGif = `/gif/${id}`

    return (
        <div className='ListOfGifs_item'>
            {/* <h6>{title}</h6> */}
            <Link to={linkToGif} className='Gif-Link'>
                <img className='ListOfGifs_image'
                    loading='lazy'
                    id={id}
                    src={url}
                    alt={`GixfyByJeandv-${title}`} />
            </Link>
        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});