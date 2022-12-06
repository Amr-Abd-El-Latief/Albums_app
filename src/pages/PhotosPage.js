
import './PhotosPage.css';
import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PhotosGrid from '../components/photos-grid/PhotosGrid';
import AlbumsSpinner from '../components/albums-spinner/AlbumsSpinner';
import AlbumPaginator from '../components/albumPaginator/AlbumPaginator';

function PhotosPage({ photos, ownerData, showSpinner, handlePaginatorClickinApp, currentPage, currentPageHandlerinApp, countPerPageinPage, countPerPageHandlerinApp }) {
  const [start, setStart] = useState(1);
  const handlePaginatorClickPage = (start, limit) => {
    handlePaginatorClickinApp(ownerData.albumId,start, limit)
  }

  const currentPageHandler = (type) => {
    currentPageHandlerinApp(type)
  }

  const startHandler = (newStart) => {
    setStart(newStart)
  }

  const countPerPageHandlerinPage = (count) => {
    countPerPageHandlerinApp(count)
  }

  return (
    <div className="photos-grid-page">
      <Header />
      <div className='photos-page-title'>
        <div>
          <h1>
            Album Owner: {ownerData.albumOwner ? ownerData.albumOwner : 'No Album Owner Exists'}
          </h1>
        </div>
        <div>
          <h1>
            Album Title: {ownerData.albumTitle ? ownerData.albumTitle : 'No Album name Exists'}
          </h1>
        </div>
      </div>
      <div className='spinner-container'>{showSpinner && <AlbumsSpinner />}</div>
      {!showSpinner && <div>
        <PhotosGrid photos={photos} ownerData={ownerData} />
        <AlbumPaginator handlePaginatorClick={handlePaginatorClickPage} currentPage={currentPage} currentPageHandler={currentPageHandler}
          start={start} startHandler={startHandler} countPerPage={countPerPageinPage} countPerPageHandler={countPerPageHandlerinPage} />

      </div>}
      <Footer />
    </div>
  );
}

export default React.memo(PhotosPage);