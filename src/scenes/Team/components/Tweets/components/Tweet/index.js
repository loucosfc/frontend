import React from 'react';
import moment from 'moment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import { Card } from 'material-ui/Card';
import AnimatedNumber from 'react-animated-number';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import './stylesheet.css';
 
const formatter = buildFormatter(frenchStrings);

class Tweet extends React.Component {
  getClassNames() {
    const classNames = ['tweet'];

    switch(this.props.index) {
      case 0:
        classNames.push('tweet--first');
      break;
      case 1:
        classNames.push('tweet--second');
      break;
      case 2:
        classNames.push('tweet--third');
      break;
      default:
      break;
    }

    return classNames.join(' ');
  }
  render() {
    const retweet = this.props.content.retweeted_status;

    return (
      <div className={this.getClassNames()}>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={retweet.entities.media[0].media_url}
                className="tweet--media__photo"
                style={{
                  background: `url(${retweet.entities.media[0].media_url})`,
                }}
              >
                <span><CameraIcon /></span>
              </a>
            }
          </div>
          }
          <TimeAgo className="tweet--timestamp" date={moment(retweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')} formatter={formatter} />
        </Card>
      </div>
    )
  }
};

export default Tweet;
