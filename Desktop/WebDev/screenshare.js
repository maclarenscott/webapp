//Status constants
var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
 
//Websocket session 
var session;
 
//Init Flashphoner API on page load
function init_api() {
    Flashphoner.init({});
}
 
//Connect to WCS server over websockets
function connect() {
    session = Flashphoner.createSession({
        urlServer: "wss://demo.flashphoner.com"
    }).on(SESSION_STATUS.ESTABLISHED, function(session) {
        startStreaming(session);
    });
}
 
//Publishing Share Screen 
function startStreaming(session) {
    var constraints = {
        video: {}
    };
    constraints.video.type = "screen";
    constraints.video.withoutExtension = true;
    session.createStream({
        name: "mystream",
        display: document.getElementById("screen-sharing"),
        constraints: constraints
    }).publish();
}