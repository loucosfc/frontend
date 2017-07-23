import React from 'react';
import Moment from 'react-moment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import { Card } from 'material-ui/Card';
import AnimatedNumber from 'react-animated-number';
import 'moment/locale/pt-br';

import './stylesheet.css';

class Tweet extends React.Component {
  render() {
    const retweet = this.props.content.retweeted_status;

    return (
      <div className={'tweet'}>
        <Card>
          <a className="tweet--profile-link" href={`https://twitter.com/${retweet.user.screen_name}`} rel="noopener noreferrer" target="_blank">
            <img src={retweet.user.profile_image_url} alt="Twitter" className="tweet--profile-image" />
            <span className="tweet--screen-name">
              @{retweet.user.screen_name}
            </span>
          </a>
          <a className="tweet--text" href={`https://twitter.com/${retweet.user.screen_name}/status/${retweet.id_str}`}>{retweet.text}</a>
          <div className="tweet--stats">
              <span className="tweet--favorites">
                <AnimatedNumber
                  value={parseInt(retweet.favorite_count, 10)}
                  style={{
                      transition: '1.5s ease-out',
                      transitionProperty:
                          'background-color, color, opacity'
                  }}
                  frameStyle={perc => (
                      perc === 100 ? {} : {color: '#e7a33a'}
                  )}
                  stepPrecision={0}
                  duration={1500}
                />
                <FavoriteIcon />
              </span>
              <span className="tweet--retweets">
                <AnimatedNumber
                  value={parseInt(retweet.retweet_count, 10)}
                  style={{
                      transition: '1s ease-out',
                      transitionProperty:
                          'background-color, color, opacity'
                  }}
                  frameStyle={perc => (
                      perc === 100 ? {} : {color: '#e7a33a'}
                  )}
                  stepPrecision={0}
                  duration={1500}
                />
                <RetweetIcon />
              </span>
          </div>
          {retweet.entities && retweet.entities.media && retweet.entities.media.length > 0 &&
          <div className="tweet--media">
            {retweet.entities.media[0].type === 'photo' &&
              <img src={retweet.entities.media[0].media_url} className="tweet--media__photo" alt="Twitter Media" />
            }
          </div>
          }
          <Moment parse='dd MMM DD HH:mm:ss ZZ YYYY' fromNow locale="pt-br" className="tweet--timestamp">{retweet.created_at}</Moment>
        </Card>
      </div>
    )
  }
};

export default Tweet;
