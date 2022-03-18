import React from 'react';
import Favorite from './Favorite';

// The "Favorites" component represents a list of favorite quotes. Like the "MovieQuote"
// component, the state data lives up in the app and is passed in via the "props" object.
// With only the rendering happening here, the component itself can be defined simply as
// a function.
//
// Some things to note:
//
// 1. When we rendered the favorites list in the app, we set the function to be called when
//    the "Delete" button on a single item is clicked. We don't use that function here in this
//    component but it is required one more level down. So here we simply reference the function
//    in our "props" object when setting the property on the underlying "Favorite" component.
//
// 2. The favorites list property is an array of quotes. To render the array we use the JavaScript
//    "map" function to convert each item into a React component the same as we did when we first
//    introduced the "Banner" component.
//
// 3. See the comments in "MovieQuote" for more on input properties and how they differ depending
//    on whether your component is defined as a function or a class.
// 
function Favorites(props) {
  return (
    <div className='app-container'>
      <h2>Favorites</h2>
      {props.favorites.map(f =>
        <Favorite key={f.id} id={f.id} quote={f.quote} film={f.film}
                  onDelete={props.onDelete} />
      )}
   </div>
  );
}
 
export default Favorites;
