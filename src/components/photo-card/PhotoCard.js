import './PhotoCard.css';
import { useState } from 'react';
import PhotoModal
 from '../photo-modal/PhotoModal';
function PhotosCard({ photo, ownerData }) {
  console.log("card photo: " + JSON.stringify(photo))
  const [isOpen, setIsOpen] = useState(false);

  /**
   * function to open the modal of the photo
   * @param {*} photoLink    the link of the photo of album
   * @param {} ownerData the data of the owner of album
   */
  const handleCardClick = (photo, ownerData) => {
    setIsOpen(true)
    //alert("photoLink : " + photoLink)

  }
  return (
    <div className="photo-card">
      <a onClick={() => handleCardClick(photo, ownerData)}>
        <img

          className="photo-card-image"

          style={{
            backgroundImage:
              `url(${photo?.thumbnailUrl})`,
            width: 300,
            height: 193,
            margin: 10

          }}
        ></img>
        <div className="text-container">
          <h4><b>{photo.title}</b></h4>

        </div>

      </a>
      {isOpen && <PhotoModal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default PhotosCard;
