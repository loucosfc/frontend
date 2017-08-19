import React from "react";
import { Player } from "video-react";
import HLSSource from "./components/HLSSource";

export default class Media extends React.Component {
  state = {
    hasMedia: false,
    hasPermalink: false,
    mediaUrl: "",
    type: "",
    contentType: ""
  };

  componentDidMount() {
    let hasMedia = false;
    let hasPermalink = false;
    let mediaUrl = "";
    let contentType = "";
    let type = "";

    const { entities, extendedEntities } = this.props;

    if (entities.media && entities.media[0]) {
      hasMedia = true;
      hasPermalink = true;
      mediaUrl = entities.media[0].media_url;
      type = entities.media[0].type;
    }

    if (extendedEntities.media && extendedEntities.media[0]) {
      hasMedia = true;
      hasPermalink = false;
      type = extendedEntities.media[0].type;

      if (type === "video") {
        mediaUrl = extendedEntities.media[0].video_info.variants.find(
          v => v.content_type === "video/mp4"
        ).url;
        console.log(mediaUrl);
      } else {
        mediaUrl = extendedEntities.media[0].media_url;
      }
      contentType =
        (extendedEntities.media[0].video_info &&
          extendedEntities.media[0].video_info.variants[0].content_type) ||
        "";
    }

    console.log(mediaUrl);

    this.setState({
      hasMedia,
      hasPermalink,
      mediaUrl,
      type,
      contentType
    });
  }

  render() {
    return (
      <div className="tweet--media">
        {this.state.hasMedia &&
          <div>
            {this.state.type === "photo" &&
              <a
                href={this.state.mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tweet--media__photo"
                style={{
                  background: `url(${this.state.mediaUrl})`
                }}
              />}
            {!this.state.hasPermalink &&
              <div>
                {this.state.type === "video" &&
                  <Player src={this.state.mediaUrl} autoPlay loop muted />}
              </div>}
          </div>}
      </div>
    );
  }
}
