import React from 'react';
import Moment from 'react-moment';
import { Grid, Row, Col, } from 'react-flexbox-grid';
import Header from '../header';
import { socketConnect } from 'socket.io-react';
import CircularProgress from 'material-ui/CircularProgress';
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
    console.log(tweet);
    
    this.setState({
      tweets: [tweet, ...this.state.tweets],
    });
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
          <Col xs={12} sm={6} md={4}>
            <div key={v.id} className="tweet">
              <Card>
                <a className="tweet--profile-link" href={`https://twitter.com/${v.retweeted_status.user.screen_name}`} rel="noopener noreferrer" target="_blank">
                  <img src={v.retweeted_status.user.profile_image_url} alt="Twitter" className="tweet--profile-image" />
                  <span className="tweet--screen-name">
                    @{v.retweeted_status.user.screen_name}
                  </span>
                </a>
                <p>{v.retweeted_status.text}</p>
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

