import './PhotoModal.css'
function PhotoModal({ setIsOpen, photo, ownerData }) {
    return (
        <div>

            <div className="photo-card">
                <a>
                    <img

                        className="photo-card-image"

                        style={{
                            backgroundImage:
                                `url(${photo?.url})`,
                            width: 300,
                            height: 193,
                            margin: 10

                        }}
                    ></img>
                    <div className="text-container">
                        <h4><b>{photo.title}</b></h4>
                         <hr />
                         <h4><b>{ownerData.albumOwner}</b></h4>

                    </div>

                </a>
            </div>
        </div>
    );
}

export default PhotoModal;