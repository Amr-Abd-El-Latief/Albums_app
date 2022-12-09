import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import AlbumGrid from '../AlbumsGrid';
import * as albumsTestData from '../../unit-test-mock-data/albums'
import * as usersTestData from '../../unit-test-mock-data/users'

const users = usersTestData.users;   // three users data
const albums = albumsTestData.albums;  // three albums data


test('App should renders Album Grid', () => {
  const observe = jest.fn();

window.IntersectionObserver = jest.fn(function() {
  this.observe = observe;
});
    render(<Router><AlbumGrid albums={albums} users={users} albumClickinPage={() => { }} />
    </Router>);
    const AlbumGridElement = screen.getByTestId('album-grid-1');
    expect(AlbumGridElement).toBeInTheDocument();
  });
  

  test('Album Grid should have three card elements in it ', () => {
    render(<Router><AlbumGrid albums={albums} users={users} albumClickinPage={() => { }} />
    </Router>);
    const AlbumCards = screen.getAllByTestId('cardLink-1');
    expect(AlbumCards).toHaveLength(3);
  });