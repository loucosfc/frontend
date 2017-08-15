const tweets = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TWEET':
      return [
        ...state,
        action.tweet
      ]
    case 'UPDATE_TWEET':
      const tweet = action.tweet;
      const count = {
        favorites: tweet.retweeted_status.favorite_count,
        retweets: tweet.retweeted_status.retweet_count
      };
      const tweets = state.map((v) => {
        if (v.retweeted_status.id === tweet.retweeted_status.id) {
          v.retweeted_status = {
            ...v.retweeted_status,
            favorite_count: count.favorites,
            retweet_count: count.retweets,
          };
        }
        return v;
      });
      return tweets;
    default:
      return state;
  }
}

export default tweets;
