export const addTweet = tweet => ({
  type: 'ADD_TWEET',
  tweet,
});

export const updateTweet = tweet => ({
  type: 'UPDATE_TWEET',
  tweet,
});
