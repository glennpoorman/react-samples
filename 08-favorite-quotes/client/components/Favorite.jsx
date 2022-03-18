import React, { Component } from 'react';

// The "Favorite" component represents a single favorite quote.
//
class Favorite extends Component {

  // We'll use this function as the click callback for the "Delete" button on the component. Note
  // that in the quote component, we simply passed the property through with no layer in between.
  // So why the difference here? The answer is that we could have done that. But by providing a
  // layer in between, this allows us to abstract out how the id is rendered on the component and
  // how it is retrieved.
  //
  // The incoming id is embedded into a string and that string is used as the id on the div
  // element containing the favorite quote. For example, if we render a favorite with an id of
  // "2", the id on the element is:
  //
  //   <div id='favorite-quote-2'>...</div>
  //
  // When the button is clicked, the element that is considered as the originator of the event
  // is the button itself. We need to know how to get from there back up to the containing "div"
  // and then parse that id out of the id string on that div. It's not realistic to expect the
  // caller to know this when all they want is to know which quote to delete. So we implement
  // an in-between function here that gets the parent of the button and parses the quote id from
  // that parent. Then we call the function specified in the "onDelete" property and simply pass
  // that original quote id along. The caller can then treat it as such and complete the delete
  // operation.
  //
  handleDelete = (e) => {

    const quoteDiv = e.target.parentNode;
    const qid = parseInt(quoteDiv.id.split('-')[2]);
    this.props.onDelete(qid);
  }

  // Render the component.
  //
  render() { 

    // Note that the incoming properties are used to render the component just as in our other
    // lower level components. For the "onClick" handler of the button though, we are passing in
    // the local function defined above.
    //
    return (
      <div id={'favorite-quote-' + this.props.id} className='favorite-quote'>
        <button onClick={this.handleDelete}>Delete</button>
        <div className='quote-container'>
          <div>{this.props.quote}</div>
          <div>{this.props.film}</div>
        </div>
      </div>
    );
  }
}
 
export default Favorite;
