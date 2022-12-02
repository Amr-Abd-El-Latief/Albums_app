import './AlbumCard.scss';

function AlbumCard({album}) {
  console.log("card album: "+ JSON.stringify(album))
  return (
<div className="album-card">
  
  <img 

className="album-card-image"

style={{
  backgroundImage:
  `url(https://via.placeholder.com/150/00ff)`,
  width: 128,
  height: 193

}}
></img>
  <div className="container">
    <h4><b>{album.title}</b></h4> 
    <a>{album.url}</a> 
  </div>
</div>
  );
}

export default AlbumCard;
