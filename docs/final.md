
1.	Title: Zayin
2.	Subtitle: converter application and calculator application
3.	Semester: Spring 2020
4.	Overview: A brief overview of your application. This will be based on what you are submitting as your final web application artifact. You should also mention why your application
It is innovative because there is no one has worked on this kind of project. It has every converter from length to temperatures, You can find pretty much every converter and a calculator tool on the websites and you can post the discussion you want to post in the forum and you can login in to view further content and further function

Team Members: Zack Kochanski  Kinsley Aikeins Mofei Xiao
5.	

# Wireframes

![map page wireframe](../master/images/mapwireframe.png)

The above image is the wireframe for the main page of the website. It has a navigation bar on top with links to the other parts of the website. There is a large map of the Honors College that users will use to select a point A and point B and see the best possible route. A directions box on the side will describe each step of the way.

![login page wireframe](../master/images/loginwireframe.png)

This is the wireframe for the login page which is required to comment in the forums. 

![forum page wireframe](../master/images/forumwireframe.png)

This is the wireframe for the forums, where users can discuss different routes and ways of getting around campus in a wheelchair. 

# HTML and CSS

![map page](../master/images/mappageimg.png)

This is the current main page of the website, or the map page. It has the navigation bar up top. The map shows all the buildings and pathways in the Honors College. Users will click on two points of the map and a continuous line will appear between the two points, showing the path that will take the least amount of time for a wheelchair-bound person. The direction box will have text appear showing each step of the way. A legend box will serve to define symbols on the map for navigation to useful markers and resources.

![login page](../master/images/loginimg.png)

![login page1](../master/images/loginpass.png)
This is the login page where users can input their information to login. 

![forum page](../master/images/forum-first-version.png)
(version 1)
![forum page1](../master/images/forum-first-version1.png)
(version 2)
This is the forum page where users can post their thoughts and information that they want to share.
![converter page1](../master/images/converter.png)
(version 2)

6.	APIs: A final up-to-date list/table describing your application’s API
Api
Object： Post Objects - each has 4 fields: postid, Title, Author(username), Date
User Objects - each has 5 fields: First Name, Last Name, Email,Username,Passwords
For our API, we will need CRUD operations for each of 2 objects.
/login which allows for a user to login
/signup which allows for a user to signup
/converter which allows for a user to see the Map and use the converter
/forum which allows for a user to see the forum
/forum/new which allows for a new dicussion forum to be added
/mappage/direction which allows for a new direction from one point to another point to be seen forum to be added

7.	Database: A final up-to-date representation of your database including a brief description of each of the entities in your data model and their relationships if any.
/client which allows for talking to the server and updating of HTML document
/server which performs CRUD operations ideally to and from a database

8.	URL Routes/Mappings: A final up-to-date table of all the URL routes that your application supports and a short description of what those routes are used for. You should also indicate any authentication and permissions on those routes.

Client -Post-> Server


Division of Labor: A breakdown of the division of labor for each team member — that is, saying who did what, for the entire project. Remember that everyone is expected to contribute roughly equally to each phase of the project. We expect to see similar numbers and kinds of GitHub commits by each student.
Division of Labor
Zack Kochanski - Created wireframes, created HTML and CSS pages, created markdown document.
Mofei Xiao - Revised login content of the login.hmtl and created content of forum.html. making server.ts  and the JavaScript, html and css code function of converter and calculator.
Kinsley Aikeins - Added working links between HTML pages, created signup.html and updated styles.css, implementation of client and server operations 

Conclusion: A conclusion describing your team’s experience in working on this project. This should include what you learned through the design and implementation process, the difficulties you encountered, what your team would have liked to know before starting the project that would have helped you later, and any other technical hurdles that your team encountered.

We learn the html and css language and use of JavaScript to program interactive websites. 

