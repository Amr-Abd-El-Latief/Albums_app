
import './PhotosGrid.css';
import PhotoCard from '../photo-card/PhotoCard';


function PhotosGrid({photos}) {
  console.log("Grid page  photos : " + JSON.stringify(photos));
  return (
    <div className="photos-grid">

      <ul className="photos-grid">

        {photos.length > 0 && photos?.map((photo) => <li key={photo.id}> <PhotoCard photo={photo} /> </li>)}
      </ul>
      {photos.length <= 0 && <h1>Unfortunately, no Photos are Currently Available
      </h1>}
    </div>


  );
}

export default PhotosGrid;
