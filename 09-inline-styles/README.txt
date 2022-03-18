inline-styles
-------------
There are no visual changes to the app in this sample.

So far we've eliminated the "public" folder and create it on the fly at build time. We've created
a more developer friendly environment for working on our JS code and bundling it up. We've moved
all of the support files into our development environment and use "Webpack" to bundle literally
everything.

What about our styles though?

Yes we moved the old CSS file into our source folder and use a Webpack loader to bundle the styles
into our code. We still have one big monolithic CSS file though with every style we use defined in
it. Furthermore, the way CSS works is, whether you keep your styles in one file or many files, a
style definition is basically a global variable. We have a very small app and our style sheet has
14 style definitions in it. That's 14 global variables and this is a very small app. Larger apps
can have hundreds or even thousands of style definitions. If you have a front end that uses Bootstrap,
right out of the gate you pull in over 600 globals.

In a 2014 article by Christopher Chedeau (a developer at Facebook), he points out that if you go
to the section on "JavaScript Best Practices" on the W3Schools website, the very first line in the
section says to avoid global variables. They felt this point was important enough that the second
line of that section also said to avoid using global variables. But as soon as we start importing
style sheets, that's exactly what we're doing and we're doing it in a big way. This makes it really
hard to avoid conflicts and also makes it really hard to clean up unused code.

One thought is to simply break the files up. This isn't peculiar to React. You can create and
include as many CSS files as you want into an HTML page. In React, you can create CSS files next
to your components that only contain the styles used by that component. All of this works but in
the end, they are still globals and once they are imported, they are available everywhere and we
still have the same issues. Furthermore, conflicts in styles become insanely difficult to track down
with multiple files as order of import effects how your elements are ultimately styled.

This has been the subject of a lot of debate in the developer community and has resulted in many
solutions over the years. As a matter of fact, there have been so many solutions that when I was
researching, I had to be careful not to get too deep in any articles that were more than a year
old for fear of spinning cycles on ideas or frameworks that were no longer applicable.

Right now I am choosing to focus on just two good solutions and will be devoting one sample to
each. So consider this part one of two.

In this sample we'll look at "inline styles". React allows you to define your styles in your JS
code as JS objects and apply them to your elements via the "style" tag. The "style" tag is not new.
In raw HTML, you can use the style tag to apply styles directly to an element. In React when you
use this tag to apply a style object defined in your code, React will simply replace the property
in the final bundle with the string representation of the style.

Consider the following:

  class MyThing extends React.Component {

    myStyle = {
      fontStyle = 'italic',
      fontWeight = 'bold'
    }

    render() {
      return <div style={this.myStyle}>Hello World!</div>
    }
  }

When "MyThing" is rendered, the final output will look like:

  <div style='font-style : italic; font-weight : bold'>Hello World!</div>

Using "inline styles" has the benefit of scoping your styles locally to your component. There can
never be any naming conflicts as the styles are applied directly to the elements and not relying
on cascading class names. It reads really nicely in the code and doesn't require any additional
plugins.

There are some downsides.

1. It is difficult to get selectors to work (for example, styling an anchor with your mouse
   hovering over it using "a:hover").

2. Also, you have to apply styles to all elements that need styling (there doesn't appear to
   be a way to, for example, apply a padding value to all "div" elements contained in a parent
   element of a certain class).

3. Using the "style" tag to add styles to so many of your elements will result in much larger
   HTML in your browser. When you play with this sample, fire up your debugging tools and inspect
   the final elements on the page. It's very messy.

4. Dashes don't fly in JS code so all those style names you've memorized over the years have to
   be replaced with names that use camel case. Not a big deal but you have to be aware of it.

5. You could also argue that the style definitions clutter up your JS code. Originally styles
   were developed as a way to separate form from function and separate the aesthetics out of the
   HTML code. Now if feels like we're putting it back in.

Still, it's a pretty clean solution that tends to read really well.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "client/index.css". This main style sheet still exists but if you look at it, there is only one
  style left in it and that's our "body" style. Since this style is applied to an element type, it
  essentially remains a global and cannot be defined inline.

* "client/index.jsx". This file still imports "index.css" but now we only pick up the "body"
  style. PLEASE READ the comments in this file where the style sheet is imported for some added
  notes on using the plugin.

* "client/components/Header.jsx". This is a new component that encapsulates the header element
  previously rendered in the app. The output is very simple but we did this in order to prep for
  the changes in how we're going to handle styles.

* "client/components/Quote.jsx". This is also a new component. This component is responsible for
  rendering the two strings (the actual quote and film it came from). This component is now shared
  by the "MovieQuote" and "Favorite" components in order to avoid duplication of code. Especially
  considering the addition of the inline styles described below.

* "client/components/Banner.jsx". For the most part, the changes to all of the components are the
  same so we'll go into detail on just this one.

  Note that the component now contains a definition for a "styles" property. This property is an
  object that contains all the style definitions. The style definitions are themselves objects
  containing the style properties and values as pairs. The only requisite here is that the style
  used to render the component is an object. I opted to define a single "styles" property which
  then contains all the styles needed for the component. I've seen several samples that defined
  their styles this way and I like the way it reads.

  The render method then uses the "style" property in individual elements and specifies the inline
  style of our choosing. When built, React will replace the object with the string representation
  of the style (as described up top).

  These same changes were applied to the components "Favorite", "Favorites", "Header", "MovieQuote",
  and "Quote" (new component. see comments below).
  