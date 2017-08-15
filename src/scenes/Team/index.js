import React from 'react';
import { Grid, } from 'react-flexbox-grid';
import { socketConnect } from 'socket.io-react';
import Header from 'components/Header';
import Tweets from 'containers/Tweets';
import ButtonBack from './components/ButtonBack';
import MaintenanceMode from './components/MaintenanceMode';
import './stylesheet.css';

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
    const exists = !!this.state.tweets.find((v) => v.retweeted_status.id === tweet.retweeted_status.id);
    if (exists) {
      const count = {
        favorites: tweet.retweeted_status.favorite_count,
        retweets: tweet.retweeted_status.retweet_count
      };
      const tweets = this.state.tweets.map((v) => {
        if (v.retweeted_status.id === tweet.retweeted_status.id) {
          return {
            ...v,
            retweeted_status: {
              ...v.retweeted_status,
              favorite_count: count.favorites,
              retweet_count: count.retweets,
            },
          };
        }
        return v;
      });
      this.setState({
        tweets,
      });
    } else {
      if (this.state.tweets.length < 20) {
        this.props.addTweet(tweet);
      }
    }
  }

  render() {
    return (
      <Grid fluid className="team">
        <Header history={this.props.history} />
        <ButtonBack history={this.props.history} />
        <MaintenanceMode enabled={this.props.maintenanceMode} />
        <Tweets />
      </Grid>
    )
  };
}

export default socketConnect(TeamScene);
