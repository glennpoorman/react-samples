import React, { Component } from 'react';
import superagent from 'superagent';
import Banner from './Banner';
import MovieQuote from './MovieQuote';
import Favorites from './Favorites';

// Define the main "App" component. Because this component now contains all of the state data
// for the app and also the various button click event handling functions, we've promoted the
// "App" from just being a function to a full blown class definition.
//
class App extends Component {

    // In this sample we are adding a favorites list in addition to the main quote. All of these
    // added components have state that we need to track. In React, when several components are
    // reflecting the same changing data, it is recommended that the state be lifted to the
    // closest common ancestor. In this sample, that is this "App" component.
    //
    // Note here than that the state data of the app keeps track of the quote (previously tracked
    // in the "MovieQuote" component) as well as the favorites list. This has an effect on how
    // components like "MovieQuote" interact with this data. Make sure and see the comments in
    // the "render" function where we render the quote and pass properties as well as how those
    // properties are used in the quote component itself.
    //
    state = {
      quote : { quote : '', file : '' },
      favorites : []
    }

    // Setting the initial state of the app data is now taking place here so define a constructor
    // that provides initial data for the quote as well as the favorites list.
    //
    constructor(props) {
      super(props);
      this.handleNextQuote();
      this.handleGetFavorites();
    }

    // This function handles the "Next Quote" button push. Previously this function was defined in
    // the "MovieQuote" class but since the state data has been lifted to this class, this function
    // has been lifted as well. Since the "MovieQuote" is still rendering the button, this function
    // is passed down to the quote as a property when the quote is rendered below.
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

    // This function handles the "Add to Favorites" button push. Like "Next Quote", this button is
    // also rendered in the quote object but since the function needs to interact with the state
    // data, it is defined here and passed to the quote at render time as a property.
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

    // This function is called when the app is rendered to fetch the current favorites list from
    // the server. The result of that request is stored in the state data and rendered as a series
    // of "Favorite" components by the favorites list.
    //
    handleGetFavorites = () => {

      superagent
        .get('/favorite-quotes')
        .then((res) => {
          this.setState({ favorites : res.body.slice() });
        });
    }

    // This function is called when the "Delete" button on an item in the favorites list is
    // called. Note that the id of the quote to be deleted is passed in and used to send the
    // delete request to the server. If the server returns a success, then we go ahead and
    // remove the item from the list in our local state object as well.
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

      // Note that instead of just rendering the quote as "<MovieQuote/>", we are now assigning
      // several properties. Since we've lifted the state up to this component, we have to somehow
      // pass the data the quote needs when we render. We do this through property assignment just
      // like you would any other HTML element. Inside the component, these properties are all
      // accessible via an object called "props". See the comments for the "MovieQuotes",
      // "Favorites", and "Favorite" components.
      //
      return (
        <>
          <header>Movie Quotes</header>
          <Banner />

          {/* Render the quote. In addition to using property assignments for the quote data, note
              that we are also using property assignments to pass down the functions that will be
              called when the "Next Quote" or "Add to Favorites" buttons are pushed. */}

          <MovieQuote quote={this.state.quote.quote} film={this.state.quote.film}
                      onNextQuote={this.handleNextQuote} onAddFavorite={this.handleAddFavorite} />

          {/* Render the favorites list. We pass the current list of favorites obtained from the
              server down the the list component as a property. In addition, we also pass the
              function to be called when the "Delete" button on an item in the favorites list is
              clicked. */}

          <Favorites favorites={this.state.favorites} onDelete={this.handleDelete} />
        </>
      );      
    }
}

export default App;
