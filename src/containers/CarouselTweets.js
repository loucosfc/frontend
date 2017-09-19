import { connect } from 'react-redux';
import {
  addTweet,
  updateTweet,
} from 'store/actions/tweets';
import CarouselTweets from 'scenes/Team/components/CarouselTweets';

const mapStateToProps = state => ({
  tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(addTweet(tweet)),
  updateTweet: tweet => dispatch(updateTweet(tweet)),
});

const CarouselTweetsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselTweets);

export default CarouselTweetsComponent;
