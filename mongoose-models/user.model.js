const mongoose = require("mongoose");
const Movie = require("./movie.model");

const userSchema = mongoose.Schema({
	username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    watchlist: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Movie"
		}
	],
    watchedlist:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Movie"
		}
	]
}, {
	timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;