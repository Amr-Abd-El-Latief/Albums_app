import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AlbumCard.css';

function AlbumCard({album, albumClickinGrid}) {
  const [albumCopy, setAlbumCopy] = useState({...album});
  let albumId = React.useMemo(()=>{return {...album}},[]);

  const handleCardClick = (album) => {
    setAlbumCopy(albumId)
    albumClickinGrid(albumCopy)

  }

  return (
    <div className="album-card">
      <Link to="/photos" onClick={() => handleCardClick(album)}> 
     
        <img

          className="album-card-image"

          style={{
            backgroundImage:
              `url(https://via.placeholder.com/150/00ff)`,
            width: 150,
            height: 193,
            margin: 10

          }}
        ></img>
        <div className="text-container">
          <h4><b>{album.title}</b></h4>
          <hr />
          <a>{album.url}</a>
        </div>

     
      </Link>
    </div>
  );
}

export default AlbumCard;
