// Define the main "App" component. Like the previous sample, rendering the app uses
// the vanilla React API to create a header component and a movie quote component.
//
function App() {
  return React.createElement(React.Fragment, null,
    React.createElement('header', null, 'Movie Quotes'),
    React.createElement(MovieQuote)
  );
}

// Define the "MovieQuote" component. Just like the previous sample, we still define
// the quote component as a JavaScript class that extends the base React component.
//
// We're now free to use JavaScript classes as Babel will transpile this code back
// into ES5 compatible code that can be consumed by the oldest browsers.
//
class MovieQuote extends React.Component {

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

    const req = new XMLHttpRequest();
    req.open('GET', '/movie-quote', true);

    const thisQuote = this;

    req.onload = function() {
      if (this.status === 200)
      {
        const quoteObj = JSON.parse(this.responseText);

        thisQuote.setState({
          quote : quoteObj.quote,
          film : quoteObj.film
        });
      }
    };

    req.send();
  }

  // Render the components that make up the movie quote.
  //
  render() {
    return React.createElement('div', { className : 'app-container'},
      React.createElement('div', { className : 'movie-quote' },
        React.createElement('div', null, this.state.quote),
        React.createElement('div', null, this.state.film)
      ),
      React.createElement('button', { onClick : this.handleNextQuote }, 'Next Quote')
    );
  }
}

// Called to render the application when the script is loaded.
//
ReactDOM.render(React.createElement(App), document.getElementById('app'));
