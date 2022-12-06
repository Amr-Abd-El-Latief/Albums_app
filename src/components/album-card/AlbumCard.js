import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AlbumCard.css';

function AlbumCard({album, albumClickinGrid , users}) {
  const [albumCopy, setAlbumCopy] = useState({...album});
  let albumId = React.useMemo(()=>{return {...album}},[]);
  alert("users card> " +JSON.stringify(users))
  let user = users.filter(a=>a.id===album.id)[0];
  

  const handleCardClick = (album) => {
    setAlbumCopy(albumId)
    albumClickinGrid(albumCopy)
  }

  return (
    <div className="album-card" data-testid="albumcard-1">
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
          <div title={album.title}><h4 >Title: <p>{album.title?album.title:'No data for Album title'}</p></h4></div>
          <div title={album.title}> <h4> Owner:<p>{user.userName?user.userName:'No Data for Owner'} </p></h4></div>
        </div>

     
      </Link>
    </div>
  );
}

export default AlbumCard;
