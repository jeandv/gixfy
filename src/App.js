import React, { Suspense } from "react";
import { Link, Route } from "wouter";
import "./App.css";

import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import StaticContext from "context/StaticContext";
import { GifsContextProvider } from "context/GifsContext";

const HomePage = React.lazy(() => import('./pages/Home'));

export default function App() {

  return (
    <StaticContext.Provider value={{
      name: 'jean',
      saludo: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <h1>GIXFY</h1>
            </Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>༼ಢ_ಢ༽  ERROR 404  ༼☯﹏☯༽</h1>} path="/gif/404" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}