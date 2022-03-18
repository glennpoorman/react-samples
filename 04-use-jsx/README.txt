use-jsx
-------
Once again, this sample is visually identical to its predecessor but we continue the exploration
of transpiling. Here we introduce JSX which stands for JavaScript XML. JSX is an extension to
the JavaScript language created for React allowing components to be rendered using XML/HTML syntax.

Consider one of the examples in the comments of the "vanilla-react" sample. We talked about
rendering the string "Hello World!" in a render function along with an additional line containing
the author's name in italics. We wrote the code as follows:

  function App() {
    return React.createElement('p', null,
                               'Hello World!',
                               React.createElement('br'),
                               React.createElement('i', null, 'Glenn Poorman')
                              );
  }

Using JSX, we can write that same function in a way that reads much cleaner and more natural.

  function App() {
    return (
      <p>
        Hello World!<br>
        <i>Glenn Poorman</i>
      </p>
    );
  }

Even in an example as simple as this, using JSX cleans up the rendering considerably and as your
component gets more complicaton, the rendering is cleaned up even more.

So how do we go from this to JavaScript? The same way we went from new JavaScript to old JavaScript.
We use Babel. By installing an additional preset, we can transpile JSX code into JavaScript code
that can be consumed by any and all of the current browsers. The preset used for this is called

  @babel/preset-react

That's all there is to it.

Try It
------

Run "npm run build" to transpile our client JS code into "public/scripts.js".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "package.json". The additional preset "@babel/preset-react" was installed as a dev dependency.

* ".babelrc". The additional preset "@babel/preset-react" is added to the list of presets. The
  contents of the file now read:

    { "presets" : ["@babel/preset-env", "@babel/preset-react"] }

* "client/index.js". The two render functions (one for the "App" and the other for the
  "MovieQuote" class) have been re-written to use JSX.

  The call to ReactDOM.render at the end of the file also takes advantage of JSX syntax
  replacing the call React.createElement(App) with a simple reference to <App />.
