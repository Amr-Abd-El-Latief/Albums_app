
import Header from '../app-components/header/Header';
import Footer from '../app-components/footer/Footer';
import PhotosGrid from '../app-components/photos-grid/PhotosGrid';

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