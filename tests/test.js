var SpotifyPlayer = require('../index');

var spotify = new SpotifyPlayer({clientId: 'b6ca0e1423e74fae862f59b320e646f2',
    clientSecret: 'a5b0c12d8ea34bedb63d3bde12cb51c9'});
spotify.init();

spotify.playSong("Shape of You", "Ed Sheeran");