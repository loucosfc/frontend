import React from 'react';
import Moment from 'react-moment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import { Card } from 'material-ui/Card';
import 'moment/locale/pt-br';

class Tweet extends React.Component {
  render() {
    const retweet = this.props.content.retweeted_status;

    return (
      <div className="tweet">
        <Card>
          <a className="tweet--profile-link" href={`https://twitter.com/${retweet.user.screen_name}`} rel="noopener noreferrer" target="_blank">
            <img src={retweet.user.profile_image_url} alt="Twitter" className="tweet--profile-image" />
            <span className="tweet--screen-name">
              @{retweet.user.screen_name}
            </span>
          </a>
          <p>{retweet.text}</p>
          <div className="tweet--stats">
              <span className="tweet--favorites"> {retweet.favorite_count} <FavoriteIcon /></span>
              <span className="tweet--retweets"> {retweet.retweet_count} <RetweetIcon /></span>
          </div>
          {retweet.entities && retweet.entities.media && retweet.entities.media.length > 0 &&
          <div className="tweet--media">
            {retweet.entities.media[0].type === 'photo' &&
              <img src={retweet.entities.media[0].media_url} className="tweet--media__photo" alt="Twitter Media" />
            }
          </div>
          }
          <Moment fromNow locale="pt-br" className="tweet--timestamp">{this.props.content.created_at}</Moment>
        </Card>
      </div>
    )
  }
};

export default Tweet;
