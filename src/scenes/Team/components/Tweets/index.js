import React from 'react';
import Tweet from './components/Tweet';
import _ from 'lodash';
import Masonry from 'react-masonry-component';
import packery from 'react-packery-component';

import './stylesheet.css';

const Packery = packery(React);

class Tweets extends React.Component {
  getFormatted(tweets) {
    return _.orderBy(this.props.tweets, (e) => e.retweeted_status.favorite_count, ['desc']);
  }

  render() {
    return (
      <div className="tweets">
        <Packery>
          {this.getFormatted(this.props.tweets).map((v, k) => {
            return (<Tweet key={k} index={k} content={v} />);
          })}
        </Packery>
      </div>
    )
  }
}

export default Tweets;
