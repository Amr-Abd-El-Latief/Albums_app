
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PhotosGrid from '../components/photos-grid/PhotosGrid';

function PhotosPage({photos,ownerData}) {
  console.log("Photos page  albums : " + JSON.stringify(photos));
  console.log("Photos page  users : " + JSON.stringify(ownerData));

  return (
    <div className="photos-grid-page">
      <Header />
         <PhotosGrid   photos={photos}   ownerData={ownerData}  />
      <Footer />
    </div>
  );
}

export default PhotosPage;