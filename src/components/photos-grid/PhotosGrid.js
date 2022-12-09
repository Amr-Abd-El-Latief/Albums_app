
import './PhotosGrid.css';
import PhotoCard from '../photo-card/PhotoCard';

function PhotosGrid({photos,ownerData}) {
  return (
    <div className="photos-grid" data-testid='photos-grid-1'>

      <ul>

        {photos.length > 0 && photos?.map((photo) => <li key={photo.id}> <PhotoCard photo={photo}  ownerData={ownerData}/> </li>)}
      </ul>
      {photos.length <= 0 && <h1>Unfortunately, no Photos are Currently Available
      </h1>}
    </div>


  );
}

export default PhotosGrid;
