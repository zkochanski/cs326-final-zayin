The setup of the project will require 

The connection of the login.html and signup.html to the database housing the user info in order to fetch and post data.

mappage.html needs the map updated to include accurate placement of identifiable landmarks and for paths to be created between them.
Also will need interactablity in order to provide service for user who wish to enter two locations and get a route between them. Paths would likely be read/loaded from the database as the set of possible routes isn't massive.

forums.html needs CRUD operations to post, view, edit, and delete comments. This information would also be stored in the database and then be loaded onto a page as requested/selected by a user.

server.ts will handle the functions to and from the database for CRUD operations for the forums, login, signup and map pages.

database.ts will store the data for all frontend pages from user's information, forum discussion posts, and map routes. Retrieval and input of data will happen at the request of server.ts.