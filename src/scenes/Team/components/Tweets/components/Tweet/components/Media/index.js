import React from "react";

export default class Media extends React.Component {
  state = {
    hasMedia: false,
    hasPermalink: false,
    mediaUrl: ""
  };

  render() {
    return (
      <div className="tweet--media">
        {this.state.hasMedia &&
          <div>
            {this.state.hasPermalink &&
              <a
                href={this.state.mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.mediaUrl}
              </a>}
            {!this.state.hasPermalink &&
              <div>
                {this.state.mediaUrl}
              </div>}
          </div>}
      </div>
    );
  }
}
