import React from "react";

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
      mediaUrl =
        (extendedEntities.media[0].video_info &&
          extendedEntities.media[0].video_info.variants[0].url) ||
        extendedEntities.media[0].media_url;
      type = extendedEntities.media[0].type;
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
                  <video width="100%" height={400} autoPlay loop muted>
                    <source
                      src={this.state.mediaUrl}
                      type={this.state.contentType}
                    />
                  </video>}
              </div>}
          </div>}
      </div>
    );
  }
}
