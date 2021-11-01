const twit = require("twit");

const config = require("./config.js");

const T = new twit({
  consumer_key: config.API_KEY,
  consumer_secret: config.API_SECRET,
  access_token: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

//function to search for the tweets
const searchForTweets = (q, count) => {
  T.get("search/tweets", { q, count }, (err, data, response) => {
    if (err) console.log(err);
    // console.log(data.statuses);
    data.statuses.forEach((item) => {
      console.log(item.text);
    });
    // console.log(response);
  });
};

//to get the followers

const getfollowers = (screen_name, count) => {
  T.get("followers/ids", { screen_name, username }, (err, data, response) => {
    if (err) console.log(err);

    // console.log(res);
  });
};

//function to post a tweet

const postTheTweet = (status) => {
  T.post("statuses/update", { status }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("posted");
    }
  });
};

searchForTweets("#reactjs", 5);
