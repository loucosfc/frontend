import React from 'react';
import { Grid, Row, Col, } from 'react-flexbox-grid';
import Header from '../header';
import Tweet from '../tweet';
import { socketConnect } from 'socket.io-react';
import CircularProgress from 'material-ui/CircularProgress';
import _ from 'lodash';
import './team.css';


class Team extends React.Component {
  state = {
    tweets: [],
  };

  componentDidMount() {
    const teamSlug = this.props.match.params.teamSlug;
    this.props.socket.emit('begin:stream', teamSlug);
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
        this.setState({
          tweets: [tweet, ...this.state.tweets],
        });
      }
    }
  }

  render() {
    return (
      <Grid fluid className="team">
        <Header history={this.props.history} />
        {this.props.maintenanceMode &&
          <div className="maintenance-mode">
            <div className="progress">
              <CircularProgress color="#e7a33a" size={256} thickness={5} />
            </div>
          </div>
        }
        <Row>
          {_.orderBy(this.state.tweets, (e) => e.retweeted_status.favorite_count, ['desc']).map((v) => (
          <Col key={v.id} xs={12} sm={6} md={4}>
            <Tweet content={v} />
          </Col>
          ))}
        </Row>
      </Grid>
    )
  };
}

export default socketConnect(Team);

