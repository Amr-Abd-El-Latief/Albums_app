import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import AlbumCard from '../AlbumCard'
import * as albumsTestData from '../../unit-test-mock-data/albums'
import * as usersTestData from '../../unit-test-mock-data/users'

//  album, user, albumClickinGrid
const album = albumsTestData.album;
const wrongAlbum =  albumsTestData.wrongAlbum;
const user = usersTestData.user;
const wrongUser = usersTestData.wrongUser;

test('App should renders Album Card', () => {
  render(<Router><AlbumCard album={album} user={user} albumClickinGrid={() => { }} />
  </Router>);
  const AlbumCardElement = screen.getByTestId('albumcard-1');
  expect(AlbumCardElement).toBeInTheDocument();
});


test('Album Card should contain album title', () => {
  render(<Router><AlbumCard album={album} user={user} albumClickinGrid={() => { }} />
  </Router>);
  const AlbumCardLabelElement = screen.getByText(/Title/i);
  expect(AlbumCardLabelElement).toHaveTextContent('quidem molestiae enim');
});

test('Album Card should contain (No data Exist title if title variable not exist > No data for Album title) album title', () => {
  render(<Router><AlbumCard album={wrongAlbum} user={user} albumClickinGrid={() => { }} />
  </Router>);
  const AlbumCardLabelElement = screen.queryAllByText(/Title/i)[0];
  expect(AlbumCardLabelElement).toHaveTextContent('No data for Album title');
});

test('Album Card should contain album Owner', () => {
  render(<Router><AlbumCard album={album} user={user} albumClickinGrid={() => { }} />
  </Router>);
  const AlbumCardLabelElement = screen.getByText(/Owner:/i);
  expect(AlbumCardLabelElement).toHaveTextContent(user.username);
});

test('Album Card should contain (No data Exist Owner if Owner variable not exist > No data for Album Owner) album Owner', () => {
  render(<Router><AlbumCard album={wrongAlbum} user={wrongUser} albumClickinGrid={() => { }} />
  </Router>);
  const AlbumCardLabelElement = screen.queryAllByText(/Owner:/i)[0];
  expect(AlbumCardLabelElement).toHaveTextContent('No Data for Album Owner');
});

// testing link 


// test('it should call albumClickinGrid  function if link clicked', () => {
//   render(<Router><AlbumCard album={album} user={user} albumClickinGrid={() => { }} />
//   </Router>);
//   const AlbumCardElement = screen.getByTestId('albumcard-1');
//   const link = screen.getByTestId('cardLink-1');
//   const spy = jest.spyOn(AlbumCardElement, 'handleCardClick')
//   fireEvent.click(link);
//   expect(spy).toHaveBeenCalled()
// })




//testing img 

test('Album Card should contain img element when run', () => {
  render(<Router><AlbumCard album={wrongAlbum} user={wrongUser} albumClickinGrid={() => { }} />
  </Router>);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});

 test('Album Card should contain img which have src with value in style: https://via.placeholder.com/150/+user.id ', () => {
  render(<Router><AlbumCard album={wrongAlbum} user={user} albumClickinGrid={() => { }} />
  </Router>);
  const imageElement = screen.getByRole('img');
  expect(imageElement.style.backgroundImage).toContain(`https://via.placeholder.com/150/${user.id}`);
 });

