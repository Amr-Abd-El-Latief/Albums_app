
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
  // let ownerData = { albumOwner: "Amr", albumTitle: "best album" }
  const [albums, setAlbums] = useState([...albumsList]);
  const [users, setUsers] = useState([...usersList]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [photos, setPhotos] = useState([...photosList]);
  const [ownerData,setOWnerData] = useState({})

  // paginator states
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage,setPostsPerPage] = useState(10);


  // setPhotos([...photostemp]);

  useEffect(() => {

    const getAlbums = async () => {
      try {
        setShowSpinner(true);
        const res = await AlbumsApi.getAll();
        setShowSpinner(false);
        const validatedRes = Array.isArray(res) ? res : [];
        // console.log("from outside Albums : " + JSON.stringify(res))
        setAlbums([...validatedRes]);
        // console.log("from outside Albums : " + JSON.stringify(albums))
        if (!Array.isArray(res)) {
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
          console.log(`Error!, Error in getting users from Server, status: ${JSON.stringify(res)}`)
          throw new Error(`Error! status: ${res.status}`);

        }
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [])



  const pageHandler = async (album)=>{
    
    
  }

  const albumClickhandler =async (album)=>{
    try {
     setShowSpinner(true);
      const res = await photosApi.get(album.id,1,5);
    
      const validatedRes = Array.isArray(res) ? res : [];
      setPhotos([...validatedRes]);
      setShowSpinner(false);

      // set owner data 
      let albumObject = albums.filter(item=>item.id===album.id)[0]['title'];
      let albumName = (Array.isArray(albumObject) && albumObject[0] && albumObject[0]['title'])?albumObject[0]['title']: "No Title for this Album!"
      let albumOwnerid= albums.filter(item=>item.id===album.id)[0]['userId'];


      // console.log("from outside Albums : " + JSON.stringify(albums))
      // if (!Array.isArray(res)) {
      //   throw new Error(`Error! status: ${res.status}`);

      // }

    } catch (err) {
      console.log(err);
    }
  }



  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;


  return (

    <BrowserRouter>

      <div className="App">


        <Routes>
          {/* <Route path="/"   element={<LandingPage />} /> */}
          <Route path="/" element={<AlbumsPage albums={albums} users={users} showSpinner={showSpinner} albumClickinApp={albumClickhandler}/>} />
          <Route path="/photos" element={<PhotosPage photos={photos} ownerData={ownerData} showSpinner={showSpinner} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
