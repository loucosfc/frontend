import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'react-slick';
import LinearProgress from 'material-ui/LinearProgress';
import Tweet from 'scenes/Team/components/Tweets/components/Tweet';
import { orderBy } from 'utils/order-by';

import './stylesheet.css';

class CarouselTweets extends React.Component {
  static duration = 5000;

  state = {
    settings: {
      autoplay: true,
      autoplayDuration: CarouselTweets.duration,
      afterChange: () => {
        this.setState({ completed: 0 });
      }
    },
    completed: 0,
  }

  componentDidMount() {
      this.timer = setInterval(() => {
        const completed = this.progress(this.state.completed);
        this.setState({ completed });
      }, 1000);

      setInterval(() => this.slider && this.slider.slickNext(), CarouselTweets.duration);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress(completed) {
    return completed <= CarouselTweets.duration / 1000 ? completed + 1 : 0;
  }

  render() {
    return (
      <div>
        {this.props.tweets.length > 1 &&
        <div style={{display: 'inline-block', width: '100%', textAlign: 'center', marginTop: 0, marginBottom: 10 }}>
          <RaisedButton label="Anterior" onTouchTap={() => this.slider.slickPrev()} />
          <RaisedButton label="Próximo" style={{marginLeft: 10}} onTouchTap={() => this.slider.slickNext()}  />
        </div>
        }
        <Slider ref={c => this.slider = c} {...this.state.settings}>
          {orderBy(this.props.tweets).map((v, k) => {
            return (<div key={v.retweeted_status.id_str} className="carousel-item">
              <Tweet index={k} content={v} /></div>);
          })}
        </Slider>
        {this.props.tweets.length > 1 &&
        <LinearProgress mode="determinate" max={CarouselTweets.duration / 1000 - 1} value={this.state.completed} style={{marginTop: 10}} />}
      </div>
    )
  }
}

export default CarouselTweets;
