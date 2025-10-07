import React from 'react';
import { Track } from './Track';

export function MainCenterBlock() {

    const trackList = [
  {
    "id": 1,
    "trackName": "Titanium",
    "trackAuthor": "David Guetta ft. Sia",
    "trackAlbum": "Nothing But The Beat",
    "trackLength": "4:05"
  },
  {
    "id": 2,
    "trackName": "Clarity",
    "trackAuthor": "Zedd ft. Foxes",
    "trackAlbum": "Clarity",
    "trackLength": "4:30"
  },
  {
    "id": 3,
    "trackName": "Stay",
    "trackAuthor": "Rihanna ft. Mikky Ekko",
    "trackAlbum": "Unapologetic",
    "trackLength": "4:00"
  },
  {
    "id": 4,
    "trackName": "Wake Me Up",
    "trackAuthor": "Avicii",
    "trackAlbum": "True",
    "trackLength": "4:07"
  },
  {
    "id": 5,
    "trackName": "Animals",
    "trackAuthor": "Martin Garrix",
    "trackAlbum": "Animals",
    "trackLength": "5:03"
  },
  {
    "id": 6,
    "trackName": "Don't You Worry Child",
    "trackAuthor": "Swedish House Mafia ft. John Martin",
    "trackAlbum": "Until Now",
    "trackLength": "3:31"
  },
  {
    "id": 7,
    "trackName": "Sunflower",
    "trackAuthor": "Post Malone & Swae Lee",
    "trackAlbum": "Spider-Man: Into the Spider-Verse (Soundtrack)",
    "trackLength": "2:38"
  },
  {
    "id": 8,
    "trackName": "On The Floor",
    "trackAuthor": "Jennifer Lopez ft. Pitbull",
    "trackAlbum": "Love?",
    "trackLength": "3:51"
  },
  {
    "id": 9,
    "trackName": "Believer",
    "trackAuthor": "Imagine Dragons",
    "trackAlbum": "Evolve",
    "trackLength": "3:24"
  }
]

    return (
    <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use href="../img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use href="../img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className="content__playlist playlist">
                {
                  trackList.map((track)=> {
                    <Track 
                      key={track.id}
                      trackName={track.trackName}
                      trackAuthor={track.trackAuthor}
                      trackAlbum={track.trackAlbum}
                      trackLength={track.trackLength}
                    />
                  })
                }
              </div>
            </div>
          </div>
          )
}

export default MainCenterBlock;