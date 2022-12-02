
import './AlbumsGrid.css';
import AlbumCard from '../album-card/AlbumCard';


function AlbumsGridPage({albums,users}) {
  console.log("Grid page  albums : " + JSON.stringify(albums));
  return (
    <div className="albums-grid">
      albums grid page
      <ul className="books-grid">
        
         {albums?.map((album)=>  <li key={album.id}> <AlbumCard album={Object.assign(...album,{"owner":users.filter(u=>u.id===album.userId)[0]['userID']})} /> </li>)}
         </ul>
    </div>


  );
}

export default AlbumsGridPage;
