import { connect } from 'react-redux';
import {
  addTweet,
  updateTweet,
} from 'store/actions/tweets';
import TeamScene from 'scenes/Team';

const mapStateToProps = state => ({
  tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(addTweet(tweet)),
  updateTweet: tweet => dispatch(updateTweet(tweet)),
});

const TeamPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamScene);

export default TeamPage;
