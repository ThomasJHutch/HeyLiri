# HeyLiri

# About
This application allows the user to make requests for information about concerts, songs, and movies all within the command line. It utilizes the Bands in Town, Spotify, and OMDB API's along with multiple node modules to make such requests possible all from inside the command line. This application was created by Stefan Kashner. Directions on how to use it are below.
Getting Started
Please ensure the following dependencies have been installed (-npm install):

axios
dotenv 
moment 
node-spotify-api
The package.json file has more information.

concert-this (musical artist)

Returns upcoming shows from the inputted artist to the console.

spotify-this-song (song name)

Returns album information from the inputted song, and a preview snippet URL, to the console.

movie-this (movie title)

Returns production details from the inputted movie, along with the plot and cast, to the console.

do-what-it-says

Reads the text in the random.txt file and runs the appropriate function to return information to the console.

# Resources
This project makes use of:

Axios - Make HTTP requests
Moment - Format times
DotEnv - Hide API keys
Node-Spotify-API - Retrieve song information
OMDB API - Retrieve movie information
Bands In Town API - Retrieve show information