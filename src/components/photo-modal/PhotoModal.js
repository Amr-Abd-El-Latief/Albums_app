import './PhotoModal.css';
import React from 'react';
import ReactDOM from 'react-dom';
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
    function openModal() {
        setIsOpen(isOpen);
    }

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
                        <h4><b>Title: {photo.title}</b></h4>
                        <br />
                        <h4><b>Owner: {ownerData.albumOwner}</b></h4>
                        <br />
                        <h4><b>Owner: {ownerData.albumOwner}</b></h4>
                    </div>


                </div>
            </Modal>
        </div>
    );
}

export default PhotoModal;