
import './AlbumsGrid.css';
import AlbumCard from '../album-card/AlbumCard';


function AlbumsGrid({ albums, users }) {
  console.log("Grid page  albums : " + JSON.stringify(albums));
  return (
    <div className="albums-grid">

      <ul className="albums-grid">

        {albums.length > 0 && albums?.map((album) => <li key={album.id}> <AlbumCard album={album} /> </li>)}
      </ul>
      {albums.length <= 0 && <h1>Unfortunately, No Albums are Currently Available
</h1>}

    </div>


  );
}

export default AlbumsGrid;
