require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");



// function findConcerts(search) {
//     console.log("Finding your concerts...");
//     // default Foo Fighters
//     if (!search) {
//         search = "Foo Fighters"
//     };

//     var queryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

//     axios({
//         method: 'get',
//         url: queryURL
//     })
//         .then(function (res) {
//             console.log("=========NEW SHOW LIST=========\n");
//             console.log(`Catch ${search} at: \n`);
//             for (var i = 0; i < res.data.length; i++) {
//                 var venue = res.data[i].venue.name;
//                 var location = res.data[i].venue.city + ", " + res.data[i].venue.region;
//                 var date = moment(res.data[i].datetime).format("MMMM DD, YYYY");
//                 console.log(`${venue} in ${location} on ${date}`);
//             }
//             console.log("\n===============================");
//         });
// }




var Spotify = new Spotify({
    id: "151d5d3b01e64e4fb359006d8334ece6",
    secret: "6413ea99ede8407fbcfc7c23c896ed6f"
});
var getArtistNames = function (artist) {
    return artist.name;
}

var getMeSpotify = function (songName) {

    Spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(
                getArtistNAMES));
            Console.log('song name: ' + songs[i].name);
            Console.log('preview song: ' + songs[i].preview_url);
            Console.log('album: ' + songs[i].album.name);
            Console.log('=========================================');

        }
    });
}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
        default:
            console.log('Liri doesnt know that');
    }
}




function findMovies(search) {
    console.log("Finding your movie...");

    if (!search) {
        search = "Mr. Nobody";
    };

    var queryURL = "https://www.omdbapi.com/?apikey=trilogy&t=" + search;

    axios({
        method: 'get',
        url: queryURL
    })
        .then(function (res) {
            var title = res.data.Title;
            var year = res.data.Year;
            var imdb = res.data.Ratings[0].Value;
            var rotten = res.data.Ratings[1].Value;
            var country = res.data.Country;
            var language = res.data.Language;
            var plot = res.data.Plot;
            var actors = res.data.Actors;
            console.log("=========NEW MOVIE=========\n");
            console.log(`${title} (${year}): ${plot}. \nThe film was produced in ${country} and available in ${language}. Rated ${imdb} on IMDB and ${rotten} on Rotten Tomatoes. \nStarring: ${actors}. `)
            console.log("\n===========================");
        });
}


if (type === "concert-this") {
    findConcerts(term);

} else if (type === "spotify-this-song") {
    findSongs(term);

} else if (type === "movie-this") {
    findMovies(term);

} else if (type === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        };

        var dataArr = data.split(",");
        var dataAction = dataArr[0];
        var dataTerm = dataArr[1]
        if (dataAction === "concert-this") {
            findConcerts(dataTerm);
        } else if (dataAction === "spotify-this-song") {
            findSongs(dataTerm);
        } else if (dataAction === "movie-this") {
            findMovies(dataTerm);
        } else {
            console.log("Can't understand that file");
        }
    });
} else {
    console.log("Please enter 'concert-this', 'spotify-this-song', 'movie-this', or 'do-what-it-says'");
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
