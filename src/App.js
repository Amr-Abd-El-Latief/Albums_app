
import './App.css';
import { useState, useEffect } from "react";

import * as AlbumsApi from './Apis/AlbumsAPI';
import * as UsersApi from './Apis/UsersAPI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';
import NotFound from './NotFound';
import AlbumsSpinner from './components/albums-spinner/AlbumsSpinner';
function App() {
  let albumsList = [];
  let usersList = [];
  let photosList = [];
  const [albums, setAlbums] = useState([...albumsList])
  const [users, setUsers] = useState([...albumsList])
  let showSpinner = false;
  // const [photos, setPhotos] = useState([...photosList])

  let photos = [
    {
      "albumId": 5,
      "id": 201,
      "title": "nesciunt dolorum consequatur ullam tempore accusamus debitis sit",
      "url": "https://via.placeholder.com/600/250289",
      "thumbnailUrl": "https://via.placeholder.com/150/250289"
    },
    {
      "albumId": 5,
      "id": 202,
      "title": "explicabo vel omnis corporis debitis qui qui",
      "url": "https://via.placeholder.com/600/6a0f83",
      "thumbnailUrl": "https://via.placeholder.com/150/6a0f83"
    },
    {
      "albumId": 5,
      "id": 203,
      "title": "labore vel voluptate ipsum quaerat debitis velit",
      "url": "https://via.placeholder.com/600/3a5c29",
      "thumbnailUrl": "https://via.placeholder.com/150/3a5c29"
    },
    {
      "albumId": 5,
      "id": 204,
      "title": "beatae est vel tenetur",
      "url": "https://via.placeholder.com/600/e4cc33",
      "thumbnailUrl": "https://via.placeholder.com/150/e4cc33"
    },
    {
      "albumId": 5,
      "id": 205,
      "title": "fugiat est ut ab sit et tempora",
      "url": "https://via.placeholder.com/600/dc17bf",
      "thumbnailUrl": "https://via.placeholder.com/150/dc17bf"
    }
  ]
  useEffect(() => {

    const getAlbums = async () => {
      try {
        showSpinner = true;
        const res = await AlbumsApi.getAll();
        showSpinner = false;
        const validatedRes = Array.isArray(res) ? res : [];
        // console.log("from outside Albums : " + JSON.stringify(res))
        setAlbums([...validatedRes]);
        // console.log("from outside Albums : " + JSON.stringify(albums))
        if (!Array.isArray(res)) {
          alert(`Error!, Error in getting Albums from Server, status: ${JSON.stringify(res)}`)
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
          throw new Error(`Error! status: ${res.status}`);

        }
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [])

  let ownerData = { albumOwner: "Amr", albumTitle: "best album" }

  return (

    <BrowserRouter>

      <div className="App">
        {showSpinner && <AlbumsSpinner />}

        <Routes>
          {/* <Route path="/"   element={<LandingPage />} /> */}
          <Route path="/" element={<AlbumsPage albums={albums} users={users} />} />
          <Route path="/photos" element={<PhotosPage photos={photos} ownerData={ownerData} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
