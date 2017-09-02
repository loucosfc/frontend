import React from "react";
import moment from "moment";
import FavoriteIcon from "material-ui/svg-icons/action/favorite-border";
import RetweetIcon from "material-ui/svg-icons/av/repeat";
import AnimatedNumber from "react-animated-number";
import CameraIcon from "material-ui/svg-icons/image/photo-camera";
import TimeAgo from "react-timeago";
import portugueseStrings from "react-timeago/lib/language-strings/pt-br";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import Media from "./components/Media";
import Share from "./components/Share";
import "./stylesheet.css";

const formatter = buildFormatter(portugueseStrings);

class Tweet extends React.Component {
  getClassNames() {
    const featured = ["first", "second", "third"];
    let className = ["tweet"];
    className =
      this.props.index < 3
        ? className.concat([`tweet--${featured[this.props.index]}`])
        : className;
    return className.join(" ");
  }

  render() {
    const retweet = this.props.content.retweeted_status;

    return (
      <div className={this.getClassNames()}>
        <div className="tweet--card">
          <a
            className="tweet--profile-link"
            href={`https://twitter.com/${retweet.user.screen_name}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div style={{ display: "flex" }}>
              <img
                src={retweet.user.profile_image_url}
                alt="Twitter"
                className="tweet--profile-image"
              />
              <div className="tweet--names">
                <span className="tweet--names__name">
                  {retweet.user.name}
                </span>
                <span className="tweet--names__screen-name">
                  @{retweet.user.screen_name}
                </span>
              </div>
            </div>
          </a>
          <a
            className="tweet--text"
            href={`https://twitter.com/${retweet.user
              .screen_name}/status/${retweet.id_str}`}
          >
            {retweet.text}
          </a>
          <TimeAgo
            className="tweet--timestamp"
            date={moment(
              retweet.created_at,
              "dd MMM DD HH:mm:ss ZZ YYYY",
              "en"
            )}
            formatter={formatter}
          />
          <div className="tweet--stats">
            <span
              title={`${retweet.favorite_count} favoritos`}
              className="tweet--favorites"
            >
              <AnimatedNumber
                value={parseInt(retweet.favorite_count, 10)}
                style={{
                  transition: "1.5s ease-out",
                  transitionProperty: "background-color, color, opacity"
                }}
                frameStyle={perc => (perc === 100 ? {} : { color: "#e7a33a" })}
                stepPrecision={0}
                duration={1500}
              />
              <FavoriteIcon />
            </span>
            <span
              title={`${retweet.retweet_count} RT's`}
              className="tweet--retweets"
            >
              <AnimatedNumber
                value={parseInt(retweet.retweet_count, 10)}
                style={{
                  transition: "1.5s ease-out",
                  transitionProperty: "background-color, color, opacity"
                }}
                frameStyle={perc => (perc === 100 ? {} : { color: "#e7a33a" })}
                stepPrecision={0}
                duration={1500}
              />
              <RetweetIcon />
            </span>
          </div>
          <Share tweet={retweet} />
          <Media
            entities={retweet.entities || {}}
            extendedEntities={retweet.extended_entities || {}}
          />
        </div>
      </div>
    );
  }
}

export default Tweet;
