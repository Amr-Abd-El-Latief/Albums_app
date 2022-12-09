import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './AlbumCard.css';

function AlbumCard({ album, user, albumClickinGrid }) {
  const [albumCopy, setAlbumCopy] = useState({ ...album });
  let albumId = React.useMemo(() => { return { ...album } }, []);

  const handleCardClick = (album) => {
    setAlbumCopy(albumId)
    albumClickinGrid(albumCopy)
  }

  let userName = (user && user.username) ? user.username : 'No Data for Album Owner';


  return (
    <div className="album-card" data-testid="albumcard-1">
      <Link to="/photos" onClick={() => handleCardClick(album)} data-testid="cardLink-1">
      {/* <LazyLoad > */}
        <img loading="lazy"
          className="album-card-image"

          style={{
            backgroundImage:
              `url(https://via.placeholder.com/150/${(user&&user.id)?user.id:1}00)`,
            width: 150,
            height: 193,
            margin: 10

          }}
        ></img>
        {/* </LazyLoad> */}
        <div className="text-container" >
          <div title={album.title}><h4 >Title: <p>{album.title ? album.title : 'No data for Album title'}</p></h4></div>
          <div title={userName}> <h4> Owner:<p>{userName} </p></h4></div>
        </div>

      </Link>
    </div>
  );
}

export default AlbumCard;
