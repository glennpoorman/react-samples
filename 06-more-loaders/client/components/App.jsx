import React from 'react';
import Banner from './Banner';
import MovieQuote from './MovieQuote';

// Define the main "App" component to render the header and movie quote.
//
function App() {
  return (
    <>
      <header>Movie Quotes</header>

      {/* Note here we've added the rendering of our "Banner" component that contains
          several image files representing still shots from a handful of movies.  */}

      <Banner />

      <MovieQuote />
    </>
  );
}

export default App;
