const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
	unique: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    }
}, {
	timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;