const express= require("express");

// initialize express app
const app = express();

// use express router - create a middleware
app.use('/api/posts', (req, res, next) => {
    const posts = [
                    {
                        id: 'post10101',
                        title: "This is first title", 
                        content: 'This is second content'
                    }, 
                    {
                        id: 'post10111', 
                        title: "This is second title", 
                        content: "This is third content"
                    }
                ];
   // send the response as json - set status as 200 means success
    res.status(200).json({message: 'post fetched successfully', posts});
});
    
// export the app
module.exports = app;
