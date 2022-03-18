import React from 'react';

// Define the "MovieQuote" component. Notice that we've remoted the state data from this component
// and moved it up into the app. We also lifted the functions that process the button clicks. With
// these items moved, the only thing left is the render function. That being the case, we've gone
// ahead and demoted the component back into just a function call. This wasn't necessary. We could
// have left it as a class definition with just the single render function. It's purely a style
// choice at this point.
//
// Note the use of the "props" object passed into the function. Since the state data has been
// lifted to the app, we had to pass the data we need to render as properties when we rendered
// this component. Any properties specified at the time that this component is rendered are
// available via the "props" object. How that object is rendered depends on whether this component
// is defined as a function or a class.
//
// Consider that the caller renders a movie quote with a line that loosk like:
//
//   <MovieQuote quote='xxx' film='yyy' />
//
// Coded as a function the way we've done here, those properties will be passed as a parameter to
// this function (that we've called "props"). You can reference those properties directly just as
// we've done in the code below with statements like:
//
//   {props.quote} or {props.film}
//
// What happens if/when our component is a class definition? In that case, rendering is done via
// the "render" member function which does not take any arguments. Instead, the properties are set
// as a class property named "props". In that case, rendering as we've done below is almost the
// same except that you use "this" to reference the "props" class property as in:
//
//   {this.props.quote} or {this.props.film}
//
// You'll see this in the "Favorite" component.
//
function MovieQuote(props)
{
  return (
    <div className='app-container'>

      {/* Note the referencing of the "props" object to fetch the quote and film strings that we
          assume are passed in as properties from the caller. */}

      <div className='movie-quote quote-container'>
        <div>{props.quote}</div>
        <div>{props.film}</div>
      </div>

      {/* Note the "onClick" property specified on the buttons. Since the click handling code
          needs to interact with the state data lifted up to the app, we needed to lift the
          click handling code up as well. We then pass those functions to this quote object
          when we rendered the quote as properties and we can reference those functions directly
          on the "props" object here.  */}

      <button onClick={props.onNextQuote}>Next Quote</button>
      <button onClick={props.onAddFavorite}>Add to Favorites</button>
    </div>
  );
}

export default MovieQuote;
