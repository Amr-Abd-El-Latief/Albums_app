
import './PhotosPage.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PhotosGrid from '../components/photos-grid/PhotosGrid';
import AlbumsSpinner from '../components/albums-spinner/AlbumsSpinner';

function PhotosPage({photos,ownerData,showSpinner}) {
  console.log("Photos page  albums : " + JSON.stringify(photos));
  console.log("Photos page  users : " + JSON.stringify(ownerData));

  return (
    <div className="photos-grid-page">
      <Header />
      <div className='spinner-container'>{showSpinner && <AlbumsSpinner />}</div>

      {!showSpinner && <PhotosGrid   photos={photos}   ownerData={ownerData}  />}
      <Footer />
    </div>
  );
}

export default PhotosPage;