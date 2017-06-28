import React from 'react';
import Moment from 'react-moment';
import { Grid, Row, Col, } from 'react-flexbox-grid';
import Header from '../header';
import { socketConnect } from 'socket.io-react';
import CircularProgress from 'material-ui/CircularProgress';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import { Card } from 'material-ui/Card';

import './team.css';

import 'moment/locale/pt-br';

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
          {this.state.tweets.map((v) => (
          <Col key={v.id} xs={12} sm={6} md={4}>
            <div className="tweet">
              <Card>
                <a className="tweet--profile-link" href={`https://twitter.com/${v.retweeted_status.user.screen_name}`} rel="noopener noreferrer" target="_blank">
                  <img src={v.retweeted_status.user.profile_image_url} alt="Twitter" className="tweet--profile-image" />
                  <span className="tweet--screen-name">
                    @{v.retweeted_status.user.screen_name}
                  </span>
                </a>
                <p>{v.retweeted_status.text}</p>
                <div className="tweet--stats">
                  <span className="tweet--favorites"> {v.retweeted_status.favorite_count} <FavoriteIcon /></span>
                  <span className="tweet--retweets"> {v.retweeted_status.retweet_count} <RetweetIcon /></span>
                </div>
                <Moment fromNow locale="pt-br" className="tweet--timestamp">{v.created_at}</Moment>
              </Card>
            </div>
          </Col>
          ))}
        </Row>
      </Grid>
    )
  };
}

export default socketConnect(Team);

