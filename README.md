# My Record Bin

This is an application for storing your personal collection of vinyl records and contacting other
users to propose trades or sales of albums between users.

Backend database is served up through Django's models and views. Django Rest Framework is utilized for CRUD functionality. User authentication is handled by Djoser. Email contact between users is facilitated with Mailgun. Front end is build using React. Materialize is used for styling of buttons, collapsibles, modals, ect. Website is served up using Heroku. Album information is served up from the Last.FM third party API. This API is proxied from Django and accessed through React via fetch calls from React to Django url end points.

User can create an account or log in if they have an existing account. This takes the user to the MyCollections page where they can search by album and artist. This returns information from the Last.FM API that includes album art, artist name, album name, tracks, and summary from wikipedia. You can save an album to your collection with the save button or delete an album via the delete button. The collections page shows all albums saved from all users. There is a contact button on each album that will trigger an email to be sent to the user that owns the specific album selected. The email is preformatted to include the album and artist name and the reply is set to to go the user who submitted the request. You can search from the collections page to narrow the page results. The search works with the album or artist name and changes the view to show the album artwork instead of the collapsible.

This app is deployed at http://myrecordbin.com/
