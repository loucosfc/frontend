import React from 'react';
import Moment from 'react-moment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import { Card } from 'material-ui/Card';
import 'moment/locale/pt-br';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <Card>
          <a className="tweet--profile-link" href={`https://twitter.com/${this.props.content.retweeted_status.user.screen_name}`} rel="noopener noreferrer" target="_blank">
            <img src={this.props.content.retweeted_status.user.profile_image_url} alt="Twitter" className="tweet--profile-image" />
            <span className="tweet--screen-name">
              @{this.props.content.retweeted_status.user.screen_name}
            </span>
          </a>
          <p>{this.props.content.retweeted_status.text}</p>
          <div className="tweet--stats">
            <span className="tweet--favorites"> {this.props.content.retweeted_status.favorite_count} <FavoriteIcon /></span>
            <span className="tweet--retweets"> {this.props.content.retweeted_status.retweet_count} <RetweetIcon /></span>
          </div>
          <Moment fromNow locale="pt-br" className="tweet--timestamp">{this.props.content.created_at}</Moment>
        </Card>
      </div>
    )
  }
};

export default Tweet;
