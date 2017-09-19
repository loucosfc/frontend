import React from 'react';
import Tweet from './components/Tweet';
import packery from 'react-packery-component';
import { orderBy } from 'utils/order-by';
import './stylesheet.css';

const Packery = packery(React);

class Tweets extends React.Component {

  render() {
    return (
      <div className="tweets">
        <Packery options={{percentPosition: true,transitionDuration: 0}}>
          {orderBy(this.props.tweets).map((v, k) => {
            return (<Tweet key={v.retweeted_status.id_str} index={k} content={v} />);
          })}
        </Packery>
      </div>
    )
  }
}

export default Tweets;
