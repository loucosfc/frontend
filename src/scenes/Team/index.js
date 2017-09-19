import React from 'react';
import { Grid, } from 'react-flexbox-grid';
import { socketConnect } from 'socket.io-react';
import Header from 'components/Header';
import Tweets from 'containers/Tweets';
import CarouselTweets from 'containers/CarouselTweets';
import ButtonBack from './components/ButtonBack';
import MaintenanceMode from './components/MaintenanceMode';
import './stylesheet.css';
import { Desktop, Tablet, Mobile } from 'utils/responsive';

class TeamScene extends React.Component {

  state = {
    tweets: [],
  };

  componentDidMount() {
    const teamSlug = this.props.match.params.teamSlug;
    this.props.socket.emit('watch:stream', teamSlug);
    this.props.socket.on('tweet', this.handleTweet);
  }

  handleTweet = (tweet) => {
    const tweetExists = !!this.props.tweets.find((v) => v.retweeted_status.id === tweet.retweeted_status.id);
    if (tweetExists) {
      this.props.updateTweet(tweet);
    } else {
      this.props.addTweet(tweet);
    }
  }

  render() {
    return (
      <Grid fluid className="team">
        <Header history={this.props.history} />
        <MaintenanceMode enabled={this.props.maintenanceMode} />
        <Desktop>
          <Tweets />
        </Desktop>
        <Tablet>
          <Tweets />
        </Tablet>
        <Mobile>
          <CarouselTweets />
        </Mobile>
      </Grid>
    )
  };
}

export default socketConnect(TeamScene);
