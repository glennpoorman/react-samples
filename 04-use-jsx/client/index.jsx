// Define the main "App" component. Note the difference in the body of this version
// of the function. Using JSX, we can simply lay out our HTML in the body of the
// function and skip the calls to "React.createElement". The transpiler will take
// care of converting this into code that the end browser will understand, Note how
// much cleaner this code reads.
//
function App() {
  return (

    // Note the "<React.Fragment>" element. Just like when we used the vanilla APIs, we can still
    // only return a single element and to that, we use the fragment element supplied by React.
    // Syntactically in JSX, we treat the fragment just like any other element as you can see in
    // the code below.
    //
    // More recent versions of React have provided the ability to substitute a single "<>" syntax
    // that the transpiler will treat as a fragment. That would allow us to write the code in our
    // render function as:
    //
    //   <>
    //     <header>Movie Quotes</header>
    //     <MovieQuote />
    //   </>
    //
    // In the samples that follow this one, we'll start using that synax. Here we use the longhand
    // just to show both.
    //
    <React.Fragment>
      <header>Movie Quotes</header>
      <MovieQuote />
    </React.Fragment>
  );
}

// Define the "MovieQuote" component.
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

  // Like with the "App", this is essentially the same render function as in the previous sample.
  // The transpiler allows us to use some niceties though. First, as with the app, we don't need
  // to call "React.createElement" and can simply lay the code out as if we're writing HTML
  // assigning the various properties as needed.
  //
  // Also note the syntax used to reference the state data and the callback used to handle the
  // button click. The curly braces tell the transpiler that we are embedding expressions into
  // our JSX code. In other words, when the final HTML is rendered, that code in between the curly
  // braces will be evaluated and the result will be embedded into the final output.
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

// Called to render the application when the script is loaded.
//
// Note that we've removed the old call to "React.createElement" and now simply use HTML syntax
// to reference "<App />". Again, this is JSX syntax and will be transpiled into vanilla JS
// code.
//
ReactDOM.render(<App />, document.getElementById('app'));
