const express= require("express");

// initialize express app
const app = express();

// use express router - create a middleware
app.use((req, res, next) => {
    console.log("First Middleware");
     // move to next middleware. if not called, it stuck at there and timeout after some time.
});

// second middleware
app.use((req, res, next) => {
    res.send("hello from express app");
});

// export the app
module.exports = app;
