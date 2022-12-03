import './PhotoCard.css';

function PhotosCard({photo}) {
  console.log("card photo: "+ JSON.stringify(photo))
  return (
<div className="photo-card">
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
  <div className="container">
    <h4><b>{photo.title}</b></h4> 
   
  </div>
</div>
  );
}

export default PhotosCard;
