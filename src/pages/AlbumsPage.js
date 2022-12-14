
import './AlbumsPage.css';
import React, { useState } from 'react';
import AlbumsGrid from '../components/albums-grid/AlbumsGrid';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AlbumsSpinner from '../components/albums-spinner/AlbumsSpinner';
// import Paginator from '../components/paginator/Paginator';

import AlbumPaginator from '../components/albumPaginator/AlbumPaginator';


function AlbumsPage({ albums, users, showSpinner, albumClickinApp, handlePaginatorClickinApp, currentPage, currentPageHandlerinApp, countPerPageinPage, countPerPageHandlerinApp }) {
  const [start, setStart] = useState(1);

  const albumClickpage = (album) => {
    albumClickinApp(album)
  }

  const handlePaginatorClickPage = (start, limit) => {
    handlePaginatorClickinApp(start, limit)
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
    <div className="albums-grid-page" data-testid='albums-page-1'>
      <Header />
      <div className='spinner-container'>{showSpinner && <AlbumsSpinner />}</div>
      {!showSpinner && <div>
        <AlbumsGrid albums={albums} users={users} albumClickinPage={albumClickpage} currentPage={currentPage} increasePage={currentPageHandler} />
        <AlbumPaginator handlePaginatorClick={handlePaginatorClickPage} currentPage={currentPage} currentPageHandler={currentPageHandler}
          start={start} startHandler={startHandler} countPerPage={countPerPageinPage} countPerPageHandler={countPerPageHandlerinPage} />

      </div>}
      <Footer />
    </div>
  );
}

export default React.memo(AlbumsPage);