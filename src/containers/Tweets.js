import { connect } from 'react-redux';
import TweetsComponent from '../scenes/Team/components/Tweets';

const mapStateToProps = state => ({
  tweets: state.tweets,
});

const mapDispatchToProps = state => ({
});

const Tweets = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsComponent);

export default Tweets;
