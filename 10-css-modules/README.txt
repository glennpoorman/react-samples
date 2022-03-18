css-modules
-----------
There are no visual changes to the app in this sample.

In case you missed it, please re-read the README.txt in the "inline-styles" sample to familiarize
yourself with the motivation behind focusing this much attention on styles.

Consider this sample part two of two on styles then.

In the last sample we moved all of the styles into the code such that each component ends up being
responsible for their own styles rendering them inline. This reads nicely in the code, is a very
clean approach to style management, and scopes the styles nicely into their owning component. In
spite of that though, there are downsides. You lose a lot of the powerful syntax of declaring
styles such as selectors. Styles and code end up stuffed back into the same location. Style names
have to be changed over to camel case as JS doesn't allow dashes in variable names. Lastly, the
resulting HTML is big and messy.

Another solution that has gained use is CSS modules. The idea here is that styles for a component
can be defined in their own CSS file but when that file is imported into a component, the loader
mangles the class names. Since the styles are still defined in a CSS file, you retain all of the
syntax and property names that have been in use for years but you get the scoping that inline
styles afforded you. Since the styling essentially works the same way it always did, you also don't
necessarily need to apply a style to every single element you render so the resulting HTML gets
cleaned up considerably. Plus, where inlining styles meant applying full style information to each
element, now we're back to simply specifying a classname referring to a style defined somewhere
else.

This method of managing styles appears to undo all of the downsides we listed for inline styles
and brings back the nice separation of form from function. It also has the upside of not requiring
any additional loaders or plugins. When the idea was first introduced, there were a handful of
packages that you could use to achieve some form or another of css modules. Today it's baked into
the loaders we're already using. The only thing we need to do to trigger it is to name our CSS
files using a specific format.

If you recall from the "more-loaders" sample, we introduced the "css-loader" that allowed us to
use the "import" statement to load a CSS file at build time. By itself, the "css-loader" would
load the contents of the file and return them as a big string. By introducing the "style-loader"
however, we added a processing step that would take that string and inject it into the web page 
using a "<style>" tag. What we haven't talked about yet is how you can trigger Webpack and the
loaders into using CSS modules simply by naming the CSS files using a specific format.

Consider the "Header" component. In this sample we'll remove the inline style we introduced in
the last sample and move it back into a CSS file as a class named ".header" (note the dot meaning
this is a classname and NOT a style applied to an element of type "header"). In this sample, we'll
name the CSS file "Header.module.css". In our code we'll import that file using the line:

  import styles from './Header.module.css';

What happens here then? First, because the file name follows the format "{component}.module.css",
the loader will inject the styles into the head of the page using a "<style>" tag just like always
but in this case, any class names will be mangled in the process to ensure that they remain unique
within the application.

Consider the following style definition.

  .header {
    background : steelBlue;
  }

If this style is processed as a CSS module and you use your browser debugging tools to inspect the
result, you'll see an item in the "<head>" section of your page that looks something like:

  <style>
    .ZXG9M02EyPfhqfu7U02e {
      background : steelBlue;
    }
  </style>

The other difference is that in addition to injecting the styles with their mangled names into the
head of your document, the styles are also loaded into a local object (here called "styles"). This
is VERY IMPORTANT as that variable contains all of the class names from the file but those names
are in their newly mangled form. To understand what that means, consider the following render:

  function Header() {
    return <header className={styles.header}>Movie Quotes</header>
  }

Here we use the "className" property to specify the class just like we have all along. But by using
the imported object to specify the name (i.e. {styles.header}), we actually apply the mangled name
which matches what we injected into the main "<style>" tag in the page. So if you inspect the result
of that render in your browser, you'll see a line that looks like:

  <header class="ZXG9M02EyPfhqfu7U02e">Movie Quotes</header>

The one small caveat here is the class naming. Since these styles are being loaded as properties
of an object, you have to be careful about names with dashes vs camel case names. You're not
necessarily required to use camel case, but you have to consider normal every day JavaScript
limitations. Consider if we'd named our header class "movie-quotes-header". You might consider
putting a line in our render function like:

  return <header className={styles.movie-quotes-header}>Movie Quotes</header>

That line would result in an error as JavaScript doesn't allow dashes in property names. To fix
the problem though, you can either rename the class to use camel case or you can write:

  return <header className={styles["movie-quotes-header"]}>Movie Quotes</header>

Personally I like using the dashes in my class names so I use this syntax a lot.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "client/components". Note that this folder is now full of sub-folders. This wasn't a necessity
  but since the goal here is to try and encapsulate everything a single component needs into one
  place, I opted to move each and every component into its own folder.

* "client/components/Banner". This is a new folder that will hold everything required to make the
  "Banner" component work. For the most part, the changes to all of the components are exactly
  the same so we'll go into detail on just this one. Please have a look at the others as well but
  you'll see that the changes are the same.

  "Banner.module.css". The styles required to render the banner are removed from the code and put 
  back into their own CSS file. The file resides in the component folder and because of the format
  of the name ( {component}.module.css ), the loaders will infer that we are using CSS modules.

  "Banner.jsx". The component definition is moved into the component folder. The style definitions
  are removed and, instead, the component's CSS file is imported which will cause the loader to
  mangle the classnames and inject them into the head of the page. When rendering, required classes
  are specified using the import styles object resulting in the mangled names being applied which
  match the styles injected into the head of the page thus ensuring unique naming.

  Also note that the images required for the "Banner" component have also been moved into the
  component folder.
