
import './AlbumsGrid.css';
import AlbumCard from '../album-card/AlbumCard';


function AlbumsGrid({ albums, users, albumClickinPage }) {

  const handleAlbumClickinGrid = (album) => {
    albumClickinPage(album)
  }
  return (
    <div    data-testid='album-grid-1'>
      <ul className="albums-grid">
        {albums.length > 0 && albums?.map((album) => <li key={album.id}> <AlbumCard album={album} user={[...users].length > 0 ? users.filter(a => a.id === album.id)[0] : {userName : 'No Data for Owner'}} albumClickinGrid={handleAlbumClickinGrid}  /> </li>)}
      </ul>
      {albums.length <= 0 && <h1>Unfortunately, No Albums are Currently Available
      </h1>}

    </div>


  );
}

export default AlbumsGrid;
