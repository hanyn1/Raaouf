import React from "react";

class Image extends React.Component {
  render() {
    const { title, largeImage, smallImage } = this.props;

    return (
      <div className="portfolio-item">
        <div className="hover-bg">
          <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
          </a>
        </div>
      </div>
    );
  }
}

export default Image;
