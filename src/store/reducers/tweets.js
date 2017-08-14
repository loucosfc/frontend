const tweets = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TWEET':
      return [
        ...state,
        {...action.tweet}
      ]
    default:
      return state;
  }
}

export default tweets;
