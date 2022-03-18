// Import the 'react' module. Like the imports in "index.jsx", we don't explicily reference the
// "React" module in this code but the transpiled JavaScript code will so we still need to import.
//
import React from 'react';

// Our "MovieQuote" definition is also now broken out into its own file. Import it here so we
// can reference it in the app's "render" function.
//
import MovieQuote from './MovieQuote';

// Define the main "App" component to render the header and movie quote.
//
function App() {
  return (
    <>
      <header>Movie Quotes</header>
      <MovieQuote />
    </>
  );
}

// We MUST export our "App" component to allow access to it from anyone else importing this file.
//
export default App;
