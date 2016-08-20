var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet (tweet) {

	console.log("I have received a new Tweet");
	var action = {
		type: 'receiver_tweet',
		tweet: tweet
	};

	AppDispatcher.dispatch(action);
}

module.exports = {
	receiveTweet: receiveTweet
};