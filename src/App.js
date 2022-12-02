import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

import * as AlbumsApi from './Apis/AlbumsAPI';
import * as UsersApi from './Apis/UsersAPI';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AlbumsPage from './albums/AlbumsPage';
import NotFound from './NotFound'
function App() {
  let albumsList = [];
  let usersList = [];
  const [albums, setAlbums] = useState([...albumsList])
  const [users, setUsers] = useState([...albumsList])


  useEffect(() => {
    const getAlbums = async () => {
      const res = await AlbumsApi.getAll();
      const validatedRes = Array.isArray(res) ? res : [];
      console.log("from outside Albums : " + JSON.stringify(res))
      setAlbums([...validatedRes]);
      console.log("from outside Albums : " + JSON.stringify(albums))

    }
    getAlbums();
  }, [])
  useEffect(() => {
    const getUsers = async () => {
      const res = await UsersApi.getAll();
      const validatedRes = Array.isArray(res) ? res : [];
      console.log("from outside Users : " + JSON.stringify(res))
      setUsers([...validatedRes]);
      console.log("from outside Users : " + JSON.stringify(users))

    }
    getUsers();
  }, [])



  return (

    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/albums"   element={<AlbumsPage albums={albums} users={users}  />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <header>
          <h2>Albums</h2>
        </header>
        <div className='menu-buttons-container'>

        <Link to="/albums"> 
              Albums
             </Link>
        </div>


        <footer>
          <p>App for showing and reading about Albums</p>
        </footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
