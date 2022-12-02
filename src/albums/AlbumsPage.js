
import './AlbumsPage.scss';
import AlpumsGrid from './albums-grid/AlbumsGrid';

function AlbumsPage({albums,users}) {
  console.log("albums page  albums : " + JSON.stringify(albums));
  console.log("albums page  users : " + JSON.stringify(users));

  return (
    <div className="albums-grid-page">
      albums grid page
         <AlpumsGrid   albums={albums}   users={users}  />
    </div>
  );
}

export default AlbumsPage;