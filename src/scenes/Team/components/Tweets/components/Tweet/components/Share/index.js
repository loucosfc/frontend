import React from "react";
import FacebookShareIcon from './assets/social-facebook-share-original.svg';
import TwitterShareIcon from './assets/social-twitter-share-original.svg';

import './stylesheet.css';

export default class Share extends React.Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <div className="tweet--share">
        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://twitter.com/${this.props.tweet.user.screen_name}/status/${this.props.tweet.id_str}`}><img src={FacebookShareIcon} /></a>
        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/retweet?tweet_id=${this.props.tweet.id_str}`}><img src={TwitterShareIcon} /></a>
      </div>
    );
  }
}
