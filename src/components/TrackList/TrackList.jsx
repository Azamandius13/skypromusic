import React from "react"
import { Track } from "../Track/Track"

export function TrackList() {

  const trackListArr = [
    {
      id : "1",
      trackTitle: "Lost In Yesterday",
      trackAuthor: "Tame Impala",
      trackAlbum: "The Slow Rush",
      trackTime: "4:05"
    },
    {
      id : "2",
      trackTitle: "Blinding Lights",
      trackAuthor: "The Weeknd",
      trackAlbum: "After Hours",
      trackTime: "3:20"
    },
    {
      id : "3",
      trackTitle: "Stolen Dance",
      trackAuthor: "Milky Chance",
      trackAlbum: "Sadnecessary",
      trackTime: "3:27"
    },
    {
      id : "4",
      trackTitle: "Electric Feel",
      trackAuthor: "MGMT",
      trackAlbum: "Oracular Spectacular",
      trackTime: "3:49"
    },
    {
      id : "5",
      trackTitle: "Dancing On My Own",
      trackAuthor: "Robyn",
      trackAlbum: "Body Talk",
      trackTime: "4:48"
    },
    {
      id : "6",
      trackTitle: "Midnight City",
      trackAuthor: "M83",
      trackAlbum: "Hurry Up, We're Dreaming",
      trackTime: "4:03"
    },
    {
      id : "7",
      trackTitle: "Take On Me",
      trackAuthor: "a-ha",
      trackAlbum: "Hunting High and Low",
      trackTime: "3:46"
    },
    {
      id : "8",
      trackTitle: "Young Folks",
      trackAuthor: "Peter Bjorn and John",
      trackAlbum: "Writer's Block",
      trackTime: "4:39"
    },
    {
      id : "9",
      trackTitle: "Feel Good Inc.",
      trackAuthor: "Gorillaz",
      trackAlbum: "Demon Days",
      trackTime: "3:41"
    },
    {
      id : "10",
      trackTitle: "Shut Up and Dance",
      trackAuthor: "WALK THE MOON",
      trackAlbum: "Talking Is Hard",
      trackTime: "3:38"
    }
  ]

  

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="../public/icon/sprite.svg#icon-search"></use>
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
              <use xlinkHref="../public/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {trackListArr.map((track)=> (
            
            <Track 
            key={track.id}
            title={track.trackTitle} 
            author = {track.trackAuthor}
            album = {track.trackAlbum}
            time = {track.trackTime}
             />
            ))} 
        </div>
      </div>
    </div>
  )
}

export default TrackList;