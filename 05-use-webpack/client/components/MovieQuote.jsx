// Import the 'react' module. We also add a little object destructuring to create a "Component"
// variable as well. This allows us to to reference "Component" in the code without having to
// explicitly reference "React.Component" (syntactic sugar).
//
// You could argue that with a local "Component" object, we could leave off the "React" import in
// the statement below. Like the imports in the other JSX files though, we still need it as the
// transpiled JavaScript code will make reference to it.
//
import React, { Component } from 'react';

// Now that webpack is allowing us to use "import" to load external modules, we can use some
// of the frameworks that we've been using on the server side. Here we import "superagent"
// so that we can somewhat simplify our function to send an HTTP request for the movie quote.
//
import superagent from 'superagent';

// Define the "MovieQuote" component.
//
class MovieQuote extends Component {

  // Define the state property where we'll keep the current quote.
  //
  state = { quote : '', film : '' }

  // Define a constructor so that we can fetch the first quote from the server right away
  // when this component comes to life.
  //
  constructor(props) {
    super(props);
    this.handleNextQuote();
  }

  // Define the function to be called when the button is pressed to fetch a new quote from
  // our server.
  //
  handleNextQuote = () => {

    // Note here that we've removed the old XMLHttpRequest usage and replaced it with the
    // "superagent" framework. This cleans things up quite a bit.
    //
    superagent
      .get('/movie-quote')
      .then((res) => {
        this.setState({
          quote : res.body.quote,
          film : res.body.film
        });
      });
  }

  // Render the components that make up the movie quote.
  //
  render() {
    return (
      <div className='app-container'>
        <div className='movie-quote'>
          <div>{this.state.quote}</div>
          <div>{this.state.film}</div>
        </div>
        <button onClick={this.handleNextQuote}>Next Quote</button>
      </div>
    );
  }
}

// Again we MUST export our "MovieQuote" class so that others can reference it.
//
export default MovieQuote;
