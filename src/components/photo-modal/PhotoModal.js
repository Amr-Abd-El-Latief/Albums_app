import './PhotoModal.css';
import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


function PhotoModal({ isOpen, photo, ownerData }) {
    const [modalIsOpen, setIsOpen] = React.useState(true);
    // function openModal() {
    //     setIsOpen(isOpen);
    // }

    function afterOpenModal() {
        
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            ><div className='buttons-container'>
                    <a  className='close-button' onClick={closeModal}>X</a>
                </div>
                <div className="modal-card">
                    <img

                        className="modal-card-image"

                        style={{
                            backgroundImage:
                                `url(${photo?.url})`,
                            width: 600,
                            height: 600,
                            margin: 10

                        }}
                    ></img>
                    <div className="text-container">
                        <div title={photo.title}><b>Photo Title: {photo.title}</b></div>
                        <div title={ownerData.albumOwner}> <b>Photo Owner: {ownerData.albumOwner}</b></div>
                        <div title={ownerData.albumTitle}> <b>Album Title: {ownerData.albumTitle}</b></div>
                    </div>


                </div>
            </Modal>
        </div>
    );
}

export default PhotoModal;