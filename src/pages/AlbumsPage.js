
import './AlbumsPage.css';
import AlbumsGrid from '../components/albums-grid/AlbumsGrid';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AlbumsSpinner from '../components/albums-spinner/AlbumsSpinner';
import Paginator from '../components/paginator/Paginator';

function AlbumsPage({ albums, users, showSpinner,albumClickinApp }) {
  console.log("albums page  albums : " + JSON.stringify(albums));
  console.log("albums page  users : " + JSON.stringify(users));
  const albumClickpage = (album)=>{

    albumClickinApp(album)
  }
  return (
    <div className="albums-grid-page">
      <Header />
      <div className='spinner-container'>{showSpinner && <AlbumsSpinner />}</div>
      {!showSpinner && <div>
      <AlbumsGrid albums={albums} users={users}  albumClickinPage={albumClickpage}/>
      {/* <Paginator
        onChangepage={pageHandler}
        postsPerPage={postsPerPage}
        totalItemsCount={totalItemsCount}
       
      /> */}
      </div>}
      <Footer />
    </div>
  );
}

export default AlbumsPage;