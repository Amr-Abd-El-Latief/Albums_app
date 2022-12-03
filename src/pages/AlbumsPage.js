
import './AlbumsPage.css';
import AlbumsGrid from '../app-components/albums-grid/AlbumsGrid';
import Header from '../app-components/header/Header';
import Footer from '../app-components/footer/Footer';

function AlbumsPage({albums,users}) {
  console.log("albums page  albums : " + JSON.stringify(albums));
  console.log("albums page  users : " + JSON.stringify(users));

  return (
    <div className="albums-grid-page">
      <Header />
         <AlbumsGrid   albums={albums}   users={users}  />
      <Footer />
    </div>
  );
}

export default AlbumsPage;