import React from "react"
import PropTypes from "prop-types";

// export function Track({trackTitle="тест" , trackAuthor="тест" , trackAlbum="тест" , trackTime="тест"} = {} ) {

export function Track({title , author , album , time} ) {
    return (
        <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="../public/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://"
              >{title} <span className="track__title-span"></span></a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">{author}</a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://"
            >{album}</a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="../public/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">{time}</span>
          </div>
        </div>
      </div>
    )
}

Track.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Track();

