Link to my [class notes](https://github.com/kamea99/startup/blob/main/notes.md).

# The Design

### Elevator Pitch

Does this sound like you? The new year begins and you brainstorm goals to become a better you, yet after only a few weeks you find that you've given up on most of them. What once was so important is nothing more than a disappointed hope and a deferment to "do it next year". [*name to come*] is an intuitive tracking app made to facilitate your goals and inspire real change. The controls are designed for ease of use, tracking is simplified, and vibrant colors promote daily usage, leading to personal improvement and excitement for growth. Enhance your well-being today, one habit at a time. 

### Design

![Startup Rough Drawing](https://github.com/kamea99/startup/assets/135865953/dc3206f2-fb95-4fec-811d-b436136dd490)

### Key Features

- Secure login over HTTPS
- Ability to add or remove a habit
- Ability to specify on which days the habit will be performed
- Full year calender
- Customizable color options
- All progress is stored and saved

### Technologies

- HTML: Will use correct HTML to structure the application. WIll use at least one HTML page, for login.
- CSS: The application will be colorful and styling will resemble a bullet journal. Application will look good and be intuitive to use.
- JavaScript: Application will display a welcome screen/login, as well as a page for tracking habits and another for tracking mood, a home page will also be displayed. 
- Service: The application will store and retrieve login information. Application will display an inspirational quote taken from the service.
- DB/Login: Application will store user information, a username and password. User cannot access tracking tools without previous authentication/login.
- WebSocket: When a new habit is added, user will receive a push notification as feedback. (Possibly when they log their mood as well)
- React: Application will use the React web framework.

# HTML Deliverable

- HTML: an individual HTML page for a home page, login page, to create an account, tell about the website, and a page for the tracker itself.
- Links: The home page links to both the login page and the create an account page. These pages both link to the tracker. 
- Text: The product has a textual description in the about page. 
- Table: The tracker is made using an interactive table, using checkboxes to mark off the days the habit was completed. Above the table is (will be) also an interactive way to observe the progress from past weeks.
- Database: The login page contains boxes for the user to input their username and password that was stored. The account page also stored their name and email. The database will also save their progress from past weeks.
- WebSocket: The website responds with immediate feedback that a new habit was successfully added.
- Service calls: The site will use third-party service calls in the about page to iterate through different inspirational quotes.
