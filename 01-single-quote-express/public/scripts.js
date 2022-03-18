// Client side scripting for the "Movie Quotes" app based on jQuery. The scripts start
// with the single "div" element in the file and then create all of the elements needed
// for the app to work.

// This function is called to create an arrange the elements.
//
function setupQuoteDOM() {

  // Fetch the main "app" element from the document and add a header with the title.
  //
  var app = $('#app').append('<header>Movie Quotes</header>');

  // Create the sub container for the random quote display and set its class name.
  //
  var cnt = $('<div>', { class : 'app-container'})
    .appendTo(app);

  // Create the elements for the random quote display and append them to the form.
  //
  $('<div>', { id : 'id-quote', class : 'movie-quote' })
    .append($('<div>'))
    .append($('<div>'))
    .appendTo(cnt);

  // Create the button to fetch a new quote.
  //
  $('<button>', { click : getQuoteHTTP, html : 'Next Quote' })
    .appendTo(cnt);
}

// This function (called when the "Next Quote" button is pushed) sends an HTTP request to the
// server for a random quote and displays it in the DOM.
//
function getQuoteHTTP() {

  $.get({
    url : '/movie-quote',
    success : function(res) {
      $('#id-quote').children()[0].innerHTML = res.quote;
      $('#id-quote').children()[1].innerHTML = res.film;
    }
  });
}

// Called when the HTML page is fully loaded.
//
$(function() {

  // Set the DOM elements required for the app to work.
  //
  setupQuoteDOM();

  // Fetch the first quote so we see something when the page first loads.
  //
  getQuoteHTTP();
});
