// The main scripts file is completely re-written to use vanilla React. At its heart, React is
// simply a library of utilities for creating components and manipulating the DOM. In that sense,
// it's not all that different from when we used jQuery and, in some respects, is more cumbersome.
//
// jQuery is old, time tested, fast, and easy to learn which makes it a good (or dare I say even
// better) choice for simple apps. React becomes more powerful as your apps become more complex
// though. React works through a virtual DOM that is maintained and manipulated behind the scenes.
// When state changes occur, only those portions of the DOM that are affected by the state change
// are re-rendered which can result in better performance overall.
//
// From a developer's perspective, React can read better and be easier to maintain but only if you
// use the JSX extensions to JavaScript. Use of JSX requires tools to transpile your code into
// native JS though and that's where project setups get runaway complicated.
//
// So before getting into that, I wanted to show one example that uses the vanilla React API with
// no JSX. Even using the vanilla API, React works best when coupled with some of the newer
// enhancements to the JavaScript language itself. Mainly ES6 classes. Of course, using classes
// in your code means that right out of the gate, you're alienating some older browsers that
// don't support classes making this app somewhat unrealistic and not fit for public consumption.
//
// Consider it our jumping off point though.
//
// So in React land, you break the client side of your app up into components. Consider an over-
// simplified version of Facebook where maybe you have a "timeline" component which contains a
// collection of "post" components. Each post component has a "like button" component and a
// "comments" section component. The comments section is a collection of "comment" components.
//
// You get the idea.
//
// In React, a component can be defined either as a class or a function depending on how complex
// the component is. At the very least, a component is called on to "render" its DOM elements. If
// the component is defined as a function, that function is called to perform the render. If the
// component is defined as a class, that class must provide a "render" function which will be
// called to perform the render.
//
// So looking at our app, we'll start with an "App" component (which is pretty customary for React
// apps). Our "App" renders our header (containing the app title) and then renders our "MovieQuote"
// component. The "MovieQuote" component will consist of a div container that displays the current
// quote and also a button that can be clicked to get a new quote. From a user point of view,
// nothing has changed.

// Starting with the "App" component then, we can define this component as a function as it
// performs no other duties but to render its DOM elements. Note that while it looks like we are
// re-creating DOM elements every time this function is called, the React APIs are working with a
// virtual DOM and not actually rendering to your browser yet.
//
function App() {

  // When called on to render, a single component can create and return just a single element.
  // React's "createElement" function is a variable argument function where the first argument
  // is the name of the element you want to create, the second is an optional list of properties
  // to set on the element (in the form of a JSON object), and the rest of the arguments are an
  // optional list of child elements.
  //
  // So let's say we just wanted to create a simple HTML paragraph with the proverbial message
  // "Hello World!" in it. Here we would write:
  //
  //   return React.createElement('p', null, 'Hello World!');
  //
  // This would render something in your browser that looks like:
  //
  //   <p>Hello World!</p>
  //
  // Suppose in addition to our message though, we wanted to add a line break and then add the
  // developer's name in italics. We can only create and return one element so the additional
  // elements need to be rendered as children. So here we would write:
  //
  //   return React.createElement('p', null,
  //     'Hello World!',                                  // Hello World!
  //     React.createElement('br'),                       // <br>
  //     React.createElement('i', null, 'Glenn Poorman')  // <i>Glenn Poorman</i>
  //   );
  //
  // The "createElement" function can take as many children as you care to tack on. The result
  // of the call above would look as follows:
  //
  //   <p>
  //     Hello World!<br>
  //     <i>Glenn Poorman</i>
  //   </p>
  //
  // Back to our sample then. Our "App" component will be responsible for rendering the
  // header (with the app title) and then a "MovieQuote" component (class definition coming
  // up next).
  //
  // Note that to render the "MovieQuote" component, we simply call "React.createElement" and
  // specify the class name as the first and only parameter. That will cause the "render" method
  // in the "MovieQuote" class to be called (we'll get to that next).
  //
  // But wait. Rendering a header and then a "MovieQuote" means two components yes? But our
  // "render" function is only supposed to return a single component. You could wrap the two
  // components in something innocuous like another "div" element but it would be a drag to
  // have to add to the noise of in your browser's DOM just to satisfy this React requirement.
  // For this very purpose, React provides what is essentially a place holder though in the
  // form of the "React.Fragment" component. This is essentially a NO-OP place holder for
  // occasions where you want to return more than one component from your "render" function.
  // It serves the purpose of wrapping other elements without adding additional elements to
  // the DOM.
  //
  // So here we create a single "React.Fragment" component and then create a "header" and a
  // "MovieQuote" as the fragment's two children.
  //
  return React.createElement(React.Fragment, null,
    React.createElement('header', null, 'Movie Quotes'),
    React.createElement(MovieQuote)
  );
}

// Now we define our "MovieQuote" component. This component will be more complex than the "App" so
// we need to define it as a class. So already we are dependent on ES6 classes which means we've
// already begun alienating potential users who aren't on the latest and greatest browsers.
//
// Components defined as classes derive from "React.Component". Being more complex than the "App"
// component, this class introduces some additional concepts that begin to illustrate some of the
// things that make React more powerful.
//
class MovieQuote extends React.Component {

  // Right away we define a "state" property. This is a special property for React components.
  // This is where we keep track of the current state of our component and changes to this state
  // are what signal the component to re-render.
  //
  // Here our state object will simply keep a copy of the quote info returned from our server.
  //
  state = { quote : '', film : '' }

  // Like any other language that allows class definitions, ES6 classes have constructors. For
  // many cases, leaving this out and relying on the default constructor behavior is fine. Here
  // we are implementing our own constructor so that when this component first comes to life,
  // we can immediately send a request to the server for the first quote.
  //
  // Note React component constructors all take a "props" object.
  //
  constructor(props) {

    // Any time you implement a constructor for a React component, the very first thing you
    // should do is to call the base class constructor passing along the input props object.
    // That is handled using the "super" keyword below.
    //
    super(props);

    // Here we call our local "handleNextQuote" function which will send a request to our server for
    // a single movie quote (more on that coming).
    //
    this.handleNextQuote();
  }

  // This function will be called when the button is pressed to fetch a new quote (and also once
  // from the constructor above). There's not really much new here from the original "ajax" sample
  // except for how the function is defined and what we do with the resulting quote.
  //
  // Note HOW this function is declared. Member functions in ES6 classes are usually defined
  // something like:
  //
  //   handleNextQuote() {
  //     ... code goes here ...
  //   }
  //
  // When defined this way, there is some wierdness surrounding the "this" pointer. I have to
  // admit to not having a firm grasp of what that wierdness exactly is but it has something to
  // do with the fact that this function is called as a callback and the "this" pointer will be
  // undefined when it's called that way.
  //
  // Originally the solution to this was putting a line in the constructor that would make sure
  // the function was "bound" to "this" component using the old JS "bind" function. That line would
  // look something like:
  //
  //   this.handleNextQuote = this.handleNextQuote.bind(this); // In the constructor.
  //
  // That works but now you have to remember to do that for any new functions that are written
  // as callbacks that need access to "this" component. A better way is to declare the callback
  // function as a class property and then assign the function to that property using the newer
  // "arrow" syntax as we do below. This automatically binds "this" and we don't have to do
  // anything else.
  //
  handleNextQuote = () => {

    // Go ahead and create the HTTP 'GET' request object with our movie quote url.
    //
    const req = new XMLHttpRequest();
    req.open('GET', '/movie-quote', true);

    // This is old JS scoping of "this" funkiness. When we finally send our request and the
    // request's "onload" function is called with the response, the "this" pointer within that
    // code will refer to the request object. Since we'll also need access to "this" component,
    // assign it here to another variable we'll have access to.
    //
    const thisQuote = this;

    // Set the "onload" function just like before so that if and when we get a good response,
    // we can fetch the new quote object.
    //
    req.onload = function() {
      if (this.status === 200)
      {
        const quoteObj = JSON.parse(this.responseText);

        // Note here that we take the results of the request and set them on this quote object
        // use the "setState" method. This is VERY IMPORTANT. Yes we could have assigned directly
        // to the state object with something like:
        //
        //   thisQuote.state.quote = quoteObj.quote;
        //   thisQuote.state.film = quoteObj.film;
        //
        // The problem with that would be, visually on your screen, nothing would have changed.
        // It is actually the call to "setState" that forces React to re-render the affected
        // DOM elements and then push those changes to your browser. Directly manipulating the
        // component's "state" object will not do that so we must always use "setState".
        //
        thisQuote.setState({
          quote : quoteObj.quote,
          film : quoteObj.film
        });
      }
    };

    // Finally ... send the request.
    //
    req.send();
  }

  // Finally we have the "render" function for our "MovieQuote" component. This is really not
  // that different from the old jQuery code in our last sample. We are essentially rendering
  // the following DOM elements:
  //
  //   <div class='app-container'>
  //     <div class='movie-quote'>
  //       <div>The quote</div>
  //       <div>Film name</div>
  //     </div>
  //     <button>Next Quote</button>
  //   </div>
  //
  // Where the initial "div" is the single component returned from this function and all of
  // the other components are children.
  //
  // Note that we no longer assign the id 'id-quote' to the div element containing the full
  // quote. In previous samples we used that id after fetching a new quote from the server
  // to locate our element. Now we simply set the state on "this" quote so we no longer need
  // that id.
  //
  // Second, note the use of the property "className". The properties object passed to the
  // "createElement" function serves as a way to set standard properties on your elements.
  // With that in mind, you might ask why the classname property isn't simply "class". The
  // reason for that is because "class" is a keyword in JavaScript. When this code is transpiled
  // then, the transpiler will render the final "<div>" element as:
  //
  //   <div class='app-container'>
  //
  // Lastly note that for the values of the text in the inner two div elements, we fetch the
  // quote and the film name from the component's state object.
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

// Lastly there is the function that is called when this script is loaded. It is assumed at this
// point that your HTML page is loaded and we go ahead and call the "ReactCOM.render" method
// specifying an instance of our "App" component and parenting that component with our single
// div element with the id 'app'.
//
ReactDOM.render(React.createElement(App), document.getElementById('app'));
