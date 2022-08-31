import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen';

export default function LazyTrending() {

    const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

    return <div ref={fromRef}>
        <Suspense fallback={'Estoy cargando...'}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}