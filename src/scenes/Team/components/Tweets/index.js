import React from 'react';
import Tweet from './components/Tweet';
import _ from 'lodash';
import Masonry from 'react-masonry-component';

import './stylesheet.css';

class Tweets extends React.Component {
  getFormatted(tweets) {
    return _.orderBy(this.props.tweets, (e) => e.retweeted_status.favorite_count, ['desc']);
  }

  render() {
    return (
      <div className="tweets">
        <Masonry>
          {this.getFormatted(this.props.tweets).map((v, k) => {
            return (<Tweet key={k} content={v} />);
          })}
        </Masonry>
      </div>
    )
  }
}

export default Tweets;
