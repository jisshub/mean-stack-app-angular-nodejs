const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    content: {
        type: String,
        required: [true, 'add content']
    }
});
module.exports = mongoose.model('post', postSchema);

// here post is the model, postSchema is just a blueprint of that model.

