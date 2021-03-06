const { urlencoded } = require("express");
const express= require("express");
const mongoose = require("mongoose");

// reuire Post Model
const Post = require('./models/post');

// initialize express app
const app = express();

// connect to mongodb database
mongoose.connect("mongodb+srv://jissmonJose:YsX6ghrRid3aK9Fx@cluster101.wqs3s.mongodb.net/node-angular?retryWrites=true&w=majority")
        .then(() => {
            console.log("Connected to Database!");
        })
        .catch(()=>{
            console.log("Connection Failed!");
        });

// Used to parse incoming JSON object
app.use(express.json());

// parse url encoded bodies
app.use(express.urlencoded({extended: true})); 

// set header
app.use((req, res, next) => {
    // allow which domain to access the resources.
    res.setHeader("Access-Control-Allow-Origin", "*");
    // only allow domains sending request with certain set of header.
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    // only allow domains sending request with a set of http methods.
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, UPDATE, PATCH, OPTIONS")
    next();
});

// post request
app.post("/api/posts",(req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    console.log(post);
    return res.status(201).json({
        message: "Data Posted",
        post
    })
});

// fetch the post using get request
app.get('/api/posts', (req, res) => {
   Post.find().then(document => {
       // send the response as json - set status as 200 means success
    res.json(200, {message: 'post fetched successfully'}, document);
   }).catch(err => {
       console.log(err.message);
   })
   
});

// delete the post
app.delete('/api/posts/:id' ,(req, res) => {
    // delete using id
    Post.deleteOne({_id: req.params.id})
        .then(result => {
            console.log(result);
        });
    res.status(200).json({message: 'post deleted'});
});
// export the app
module.exports = app;