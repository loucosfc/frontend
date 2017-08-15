import { connect } from 'react-redux';
import { addTweet } from 'store/actions/tweets';
import TeamScene from 'scenes/Team';

const mapStateToProps = state => ({
  tweets: state.tweets,
});

const mapDispatchToProps = dispatch => ({
  addTweet: tweet => dispatch(addTweet(tweet)),
});

const TeamPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamScene);

export default TeamPage;
