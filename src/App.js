
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
  const [currentPage,setCurrentPage] = useState(1);
  const [countPerPage,setCountPerPage] =  useState(20);


// photos paginator
  const [currentPagePhotos,setCurrentPagePhotos] = useState(1);
  const [countPerPagePhotos,setCountPerPagePhotos] =  useState(20);

// for Albums paginator

  const currentPageHandler=(type)=>{
    alert("currentPageHandler in App type: " + type)
    if(type==='next'){
       setCurrentPage((prev)=>prev+1);
    }else{
      setCurrentPage((prev)=>(prev-1)<0?0:prev-1);

    }
  }


// for photos paginator
  const currentPageHandlerPhotos=(type)=>{
    alert("currentPageHandler in App type: " + type)
    if(type==='next'){
       setCurrentPagePhotos((prev)=>prev+1);
    }else{
      setCurrentPagePhotos((prev)=>(prev-1)<0?0:prev-1);

    }
  }
  useEffect(() => {

    const getAlbums = async () => {
      try {
        setShowSpinner(true);
        const res = await AlbumsApi.get(0,20);
        setShowSpinner(false);
        const validatedRes = Array.isArray(res) ? res : [];
        // console.log("from outside Albums : " + JSON.stringify(res))
        setAlbums([...validatedRes]);
        // console.log("from outside Albums : " + JSON.stringify(albums))
        if (!Array.isArray(res)) {
          alert(`Error!, Error in getting Albums from Server, status: ${JSON.stringify(res)}`)
          console.log(`Error!, Error in getting Albums from Server, status: ${JSON.stringify(res)}`)
          throw new Error(`Error! status: ${res.status}`);

        }

      } catch (err) {
        console.log(err);
      }

    }
    getAlbums();
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await UsersApi.getAll();
        const validatedRes = Array.isArray(res) ? res : [];
        //  console.log("from outside Users : " + JSON.stringify(res))
        setUsers([...validatedRes]);
        //  console.log("from outside Users : " + JSON.stringify(users))
        if (!Array.isArray(res)) {
          alert(`Error!, Error in getting users from Server, status: ${JSON.stringify(res)}`)

          console.log(`Error!, Error in getting users from Server, status: ${JSON.stringify(res)}`)
          throw new Error(`Error! status: ${res.status}`);

        }
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [])

  const handlePaginator = async (start, limit) => {
    alert("start:" + start + "  limit:" + limit)

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


  const albumClickhandler = async (album) => {
    try {
      setShowSpinner(true);
      const res = await photosApi.get(album.id, 1, 5);

      const validatedRes = Array.isArray(res) ? res : [];
      setPhotos([...validatedRes]);
      setShowSpinner(false);

      // set owner data 
      let albumObject = albums.filter(item => item.id === album.id);
      alert("albumObject : " + JSON.stringify(albumObject));
      let albumName = (Array.isArray(albumObject) && albumObject[0] && albumObject[0]['title']) ? albumObject[0]['title'] : "No Title for this Album!"
      let albumId = (Array.isArray(albumObject) && albumObject[0] && albumObject[0]['id']) ? albumObject[0]['id'] : null;

      let albumOwnerid = albums.filter(item => item.id === album.id)[0]['userId'];
      let ownerName = users.filter(item => item.id === albumOwnerid)[0]['username'];

      setOWnerData({ albumOwner: ownerName, albumTitle: albumName, albumId:albumId });
      alert("ownerData : " + JSON.stringify(ownerData));
      // console.log("from outside Albums : " + JSON.stringify(albums))
      // if (!Array.isArray(res)) {
      //   throw new Error(`Error! status: ${res.status}`);

      // }

    } catch (err) {
      console.log(err);
    }
  }

  const handlePaginatorinPhotos = async (albumId,start, limit) => {
    alert("album id : "+ albumId +"start:" + start + "  limit:" + limit)

    try {
      setShowSpinner(true);
      const res = await photosApi.get(albumId,start, limit);

      const validatedRes = Array.isArray(res) ? res : [];
      setPhotos([...validatedRes]);
      setShowSpinner(false);



    } catch (err) {
      console.log(err);
    }
  }


  const countPerPageHandlerinApp = (count)=>{
    setCountPerPage(count)
  }

  const countPerPageHandlerinAppPhotos = (count)=>{
    setCountPerPagePhotos(count)
  }


  return (

    <BrowserRouter>

      <div className="App">

        <Routes>
          {/* <Route path="/"   element={<LandingPage />} /> */}
          <Route path="/" element={<AlbumsPage albums={albums} users={users} showSpinner={showSpinner} albumClickinApp={albumClickhandler} handlePaginatorClickinApp={handlePaginator} 

          currentPage={currentPage} currentPageHandlerinApp={currentPageHandler}  countPerPageinPage = {countPerPage} countPerPageHandlerinApp={countPerPageHandlerinApp}  />} />
          <Route path="/photos" element={<PhotosPage photos={photos} ownerData={ownerData} showSpinner={showSpinner} 
          handlePaginatorClickinApp={handlePaginatorinPhotos}  currentPage={currentPagePhotos} currentPageHandlerinApp={currentPageHandlerPhotos}  countPerPageinPage = {countPerPagePhotos} countPerPageHandlerinApp={countPerPageHandlerinAppPhotos} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
