const moongose = require('mongoose');

const PostSchema = new moongose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongose.model("Post", PostSchema);