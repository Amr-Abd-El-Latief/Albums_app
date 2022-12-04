
import './AlbumsGrid.css';
import AlbumCard from '../album-card/AlbumCard';


function AlbumsGrid({ albums, users,albumClickinPage }) {
  console.log("Grid page  albums : " + JSON.stringify(albums));
  const handleAlbumClickinGrid = (album)=>{
    albumClickinPage(album)
  }
  return (
    <div className="albums-grid">

      <ul className="albums-grid">

        {albums.length > 0 && albums?.map((album) => <li key={album.id}> <AlbumCard album={album} albumClickinGrid={handleAlbumClickinGrid} /> </li>)}
      </ul>
      {albums.length <= 0 && <h1>Unfortunately, No Albums are Currently Available
</h1>}

    </div>


  );
}

export default AlbumsGrid;
