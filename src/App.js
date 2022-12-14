
import './App.css';
import { useState, useEffect } from "react";

import * as AlbumsApi from './Apis/AlbumsAPI';
import * as UsersApi from './Apis/UsersAPI';
import * as photosApi from './Apis/PhotosAPI'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';
import NotFound from './NotFound';
function App() {
  let albumsList = [];
  let usersList = [];
  let photosList = [];
  const [albums, setAlbums] = useState([...albumsList]);
  const [users, setUsers] = useState([...usersList]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [photos, setPhotos] = useState([...photosList]);
  const [ownerData, setOWnerData] = useState({})


  // Albums paginator
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(20);


  // photos paginator
  const [currentPagePhotos, setCurrentPagePhotos] = useState(1);
  const [countPerPagePhotos, setCountPerPagePhotos] = useState(20);


  /**
   * Effect to get albums once at the begining of the App to show in the landing bage
   */
  useEffect(() => {

    const getAlbums = async () => {
      try {
        setShowSpinner(true);
        const res = await AlbumsApi.get(0, 20);
        setShowSpinner(false);
        const validatedRes = Array.isArray(res) ? res : [];
        setAlbums([...validatedRes]);
        if (!Array.isArray(res)) {
          console.log(`Error!, Error in getting Albums from Server, status: ${JSON.stringify(res)}`)
          throw new Error(`Error! status: ${res.status}`);

        }

      } catch (err) {
        errorHandler(err);
      }

    };
    getAlbums();
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await UsersApi.getAll();
        const validatedRes = Array.isArray(res) ? res : [];
        setUsers([...validatedRes]);
        if (!Array.isArray(res)) {
          console.log(`Error!, Error in getting users from Server, status: ${JSON.stringify(res)}`)
          throw new Error(`Error! status: ${res.status}`);

        }
      } catch (err) {
        errorHandler(err);
      }

    }
    getUsers()
  }, [])


  /**
   * function to handle Albums paginator next and previous buttons
   * @param {} type  button tybe string indicator prev/next button 'prev' for previous , 'next' for next button
   *    
   **/
  const currentPageHandler = (type) => {
    if (type === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => (prev - 1) <= 0 ? 0 : prev - 1);

    }
  }


  /**
   * function to handle photos paginator next and previous buttons
   * @param {} type  button tybe string indicator prev/next button 'prev' for previous , 'next' for next button
   *    
   **/
  const currentPageHandlerPhotos = (type) => {
    if (type === 'next') {
      setCurrentPagePhotos((prev) => prev + 1);
    } else {
      setCurrentPagePhotos((prev) => (prev - 1) < 0 ? 0 : prev - 1);

    }
  }


  /**
   * function to handle the paginator in the album page
   * @param {*} start  start of the albums to be brought from the Api
   * @param {*} limit   limit of the albums to be brought from the Api
   */
  const handlePaginator = async (start, limit) => {
    try {
      setShowSpinner(true);
      const res = await AlbumsApi.get(start, limit);
      const validatedRes = Array.isArray(res) ? res : [];
      setAlbums([...validatedRes]);
      setShowSpinner(false);

    } catch (err) {
      console.log(err);
    }
  }
  /**
   * function to handle the paginator in the Photo page
   * @param {*} albumId  the albumId to which the photos will be brought
   * @param {*} start  start of the albums to be brought from the Api
   * @param {*} limit   limit of the albums to be brought from the Api
   */
  const handlePaginatorinPhotos = async (albumId, start, limit) => {
    try {
      setShowSpinner(true);
      const res = await photosApi.get(albumId, start, limit);

      const validatedRes = Array.isArray(res) ? res : [];
      setPhotos([...validatedRes]);
      setShowSpinner(false);
    } catch (err) {
      console.log(err);
    }
  }



  /**
   * function to handle when user clicks on certain album it gets its related photos
   * @param { } album the album to which the photos will be brought
   */

  const albumClickhandler = async (album) => {
    try {
      setShowSpinner(true);
      const res = await photosApi.get(album.id, 1, 20);

      const validatedRes = Array.isArray(res) ? res : [];
      setPhotos([...validatedRes]);
      setShowSpinner(false);

      // set owner data 
      let albumObject = albums.filter(item => item.id === album.id);
      let albumName = (Array.isArray(albumObject) && albumObject[0] && albumObject[0]['title']) ? albumObject[0]['title'] : "No Title for this Album!"
      let albumId = (Array.isArray(albumObject) && albumObject[0] && albumObject[0]['id']) ? albumObject[0]['id'] : null;

      let albumOwnerid = albums.filter(item => item.id === album.id)[0]['userId'];
      let ownerName = users.filter(item => item.id === albumOwnerid)[0]['username'];

      setOWnerData({ albumOwner: ownerName, albumTitle: albumName, albumId: albumId });
      if (!Array.isArray(res)) {
        throw new Error(`Error! status: ${res.status}`);

      }

    } catch (err) {
      console.log(err);
    }
  }



  const countPerPageHandlerinApp = (count) => {
    setCountPerPage(count)
  }

  const countPerPageHandlerinAppPhotos = (count) => {
    setCountPerPagePhotos(count)
  }

/**
 * function that handles the important types of error, and show them to user, else it log the error
 * @param {*} e  error object
 */
  const errorHandler = (e) => {
    if (e.code == 'ECONNABORTED') { // tel user about important errors
      console.log('you can now handle time out here')
      alert('Error:Request Time out.  details of error:' + JSON.stringify(e))
    } else {
      console.error(e);
    }

  }

  return (

    <BrowserRouter>

      <div className="App" data-testid='app-1'>

        <Routes>
          <Route path="/" element={<AlbumsPage albums={albums} users={users} showSpinner={showSpinner}
            albumClickinApp={albumClickhandler} handlePaginatorClickinApp={handlePaginator}
            currentPage={currentPage} currentPageHandlerinApp={currentPageHandler} countPerPageinPage={countPerPage}
            countPerPageHandlerinApp={countPerPageHandlerinApp} />} />
          <Route path="/photos" element={<PhotosPage photos={photos} ownerData={ownerData}
            showSpinner={showSpinner} handlePaginatorClickinApp={handlePaginatorinPhotos}
            currentPage={currentPagePhotos} currentPageHandlerinApp={currentPageHandlerPhotos}
            countPerPageinPage={countPerPagePhotos} countPerPageHandlerinApp={countPerPageHandlerinAppPhotos} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
