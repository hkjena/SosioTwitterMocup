const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TWEETS":
      return action.payload;
    case "ADD_TWEET":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default tweetReducer;
