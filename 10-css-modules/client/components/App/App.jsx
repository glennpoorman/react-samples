import React, { Component } from 'react';
import superagent from 'superagent';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import MovieQuote from '../MovieQuote/MovieQuote';
import Favorites from '../Favorites/Favorites';

// Define the main "App" component.
//
class App extends Component {

    // The application state data.
    //
    state = {
      quote : { quote : '', file : '' },
      favorites : []
    }

    // Initialize the state data via HTTP requests to the server.
    //
    constructor(props) {
      super(props);
      this.handleNextQuote();
      this.handleGetFavorites();
    }

    // The "Next Quote" button handler sends a request to fetch a new quote from the server.
    //
    handleNextQuote = () => {

      superagent
        .get('/movie-quote')
        .then((res) => {
          this.setState({
            quote : {
              quote : res.body.quote,
              film : res.body.film
            }
          });
        });
    }

    // The "Add to Favorites" button handler sends a request to post the current quote to the
    // user's favorites list and to the list in the local state data.
    //
    handleAddFavorite = () => {

      superagent
        .post('/favorite-quotes')
        .set('Accept', 'application/json')
        .send(this.state.quote)
        .then((res) => {
          const favs = this.state.favorites.slice();
          favs.push(res.body);
          this.setState({ favorites : favs });
        });
    }

    // Function sends a request to fetch the user's favorites list from the server and adds the
    // result to the local state data.
    //
    handleGetFavorites = () => {

      superagent
        .get('/favorite-quotes')
        .then((res) => {
          this.setState({ favorites : res.body.slice() });
        });
    }

    // "Delete" button handler deletes the favorite identified by the input id from the user's
    // favorites list both locally and on the server.
    //
    handleDelete = (qid) => {

      superagent
        .delete('/favorite-quotes')
        .query({ id : qid })
        .then((res) => {
          const ix = this.state.favorites.findIndex(f => (f.id === qid));
          if (ix >= 0)
          {
            const favs = this.state.favorites.slice();
            favs.splice(ix, 1);
            this.setState({ favorites : favs });
          }
        });
    }

    // Render this component.
    //
    render() {
      return (
        <>
          <Header />
          <Banner />
          <MovieQuote quote={this.state.quote.quote} film={this.state.quote.film}
                      onNextQuote={this.handleNextQuote} onAddFavorite={this.handleAddFavorite} />
          <Favorites favorites={this.state.favorites} onDelete={this.handleDelete} />
        </>
      );      
    }
}

export default App;
