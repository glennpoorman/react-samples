React Samples

After an accelerated "boot camp" attended by several members of the Factory team last year, it
occurred to me that one issue I've had with attempting to learn programming in the web world was
the overwhelming amount of info you need to soak up just to get started. It seems like most
tutorials can't even get off the ground without having you install a dozen or so frameworks and
never taking the time to go into what they all do.

The instructor in our short boot camp did a good job of focusing in purely on server side JavaSript
and we learned a lot but there was a lot of "setup" that he didn't cover in detail and he also never
really went into detail on the client code in his samples. The client code was all written using
React and was pretty complex. Without any background on what it was or how it worked, it looked
pretty foreign at the start of the course and just as foreign at the end.

So I went off on a mission to learn how React worked and found that virtually all of the tutorials
were either using automated tools to create a template app (without ever describing what those tools
were doing) or they just skipped straight to the coding with no discussion on how these apps work or
their structure.

So just like with the NodeJS samples, I decided to back to absolute basics taking the "Movie Quotes"
app from those samples and slowly moving from jQuery to React for the front end and doing it in baby
steps so that by the time you get to the end, you understand all the pieces to making the app work.

React
-----

React is a JavaScript library for building user interfaces developed by Facebook. While it is a
powerful replacement for client side code using vanilla JavaScript or jQuery, using React in your
client brings a whole new level of complication to your development and deployment. While there
are many tutorials out there doing a fare job of discussing React, I found that most of them
started with utilities like "create-react-app" that I felt somewhat pigeon-holed the reader into
a certain structure for their apps and black boxed quite a bit of the setup thus leaving you
without an understanding of how things work. What I wanted to know was how to fit React into an
existing website or app. Maybe I have a mature app based on NodeJS and Express and I want to
simply replace my jQuery front end with a front end based on React.

To that end, this set of samples takes up where the "NodeJS" samples left off (kind of). I really
think that to get the most out of this, you should start with the "NodeJS" samples. If you already
have a solid handle on writing servers in NodeJS using Express, you might be able to jump right in.

The very first sample is the simplest version of the "Movie Quotes" app from the "NodeJS" samples.
I wanted a jumping off point so I took that app and added the use of "Express" and "jQuery" to it.
We'll move the client of that app from jQuery into React and then start adding the various pieces
of functionality from the "NodeJS" samples back in.

How to go through the samples
-----------------------------

The best way to go through the samples is to go through each of the numbered folders in order and,
in each folder, start with the README.txt file. The README file gives an overview of what the
samples does, an explanation of how to run the sample, and a list of the new and/or changed files
from the previous sample along with a very high level description of the change. For more details
on the change, you go to the file/code comments. This high level list simply saves you from looking
for changes in files that haven't changed.

Again, the specifics of the changes and how the code works will be explained in the code comments.
New things will be heavily commented in the code. In an effort to avoid a mile high pile of comments
in the later samples, detailed comments on code that was already explained in a previous sample will
be removed or simplified down to just a line or two. In other words, if you see some code you don't
understand and it isn't commented or the comments are vague, chances are it was introduced in an
earlier sample and was heavily commented there.

To start with though, always use the "What's Different?" section in the README to zoom in on the
specific changes for any particular sample.

Files in this folder
--------------------
In addition to the README.txt in the main folder and the numbered sample folders, you will also
note the files "clean.cmd" and "install.cmd". Running the file "install.cmd" will go through each
of the numbered sample folders and run "npm install" to perform the necessary installations.
Similarly, the file "clean.cmd" will go through each of the sample folders and remove the extra
stuff created on install thus cleaning up the folder.

What's Covered
--------------
These samples assume some knowledge of JavaScript, HTML, and CSS. It is also assumed that you've
been through the "NodeJS" samples and understand those fairly well. Or if you haven't been through
them, you at least have a good grasp of writing server code using NodeJS and "Express".
