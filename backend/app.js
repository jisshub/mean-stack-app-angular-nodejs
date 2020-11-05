const { urlencoded } = require("express");
const express= require("express");

// initialize express app
const app = express();

// Used to parse incoming JSON object
app.use(express.json());

// parse url encoded bodies
app.use(express.urlencoded()); 

// set header
app.use((req, res, next) => {
    // allow which domain to access the resources.
    res.setHeader("Access-Control-Allow-Origin", "*");
    // only allow domains sending request with certain set of header.
    res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    // only allow domains sending request with a set of http methods.
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, UPDATE, PATCH, OPTIONS")
    next();
});

// post request
app.post("/api/posts",(req, res, next) => {
    const post = req.body;
    console.log(post);
    return res.status(201).json({
        message: "Data Posted",
        post
    })
});

// use express router - create a middleware
app.use('/api/posts', (req, res, next) => {
    const posts = [
                    {
                        id: 'post10101',
                        title: "This is first title", 
                        content: 'This is first content'
                    }, 
                    {
                        id: 'post10111', 
                        title: "This is second title", 
                        content: "This is second content"
                    },
                    {
                        id: 'post10112', 
                        title: "This is third title", 
                        content: "This is third content"
                    }
                ];
   // send the response as json - set status as 200 means success
    res.status(200).json({message: 'post fetched successfully', posts});
});
    
// export the app
module.exports = app;
