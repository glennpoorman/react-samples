import React, { Component } from 'react';
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

export default MovieQuote;
