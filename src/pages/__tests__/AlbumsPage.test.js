import { render, fireEvent, screen } from '@testing-library/react';
import AlbumsPage from '../AlbumsPage';
import { MemoryRouter as Router } from 'react-router-dom';

import * as albumsTestData from '../../components/unit-test-mock-data/albums';
import * as usersTestData  from '../../components/unit-test-mock-data/users';

const users = usersTestData.users;   // three users data
const albums = albumsTestData.albums;  // three albums data



test('App should renders AlbumsPage', () => {
  render(<Router><AlbumsPage  albums={albums} users={users} albumClickinApp={() => { }} handlePaginatorClickinApp={() => { }}  currentPage='1'   currentPageHandler={() => { }} 
  countPerPageinPage='20' countPerPageHandlerinApp={() => { }} /></Router>);
  const AlbumsPageElement = screen.getByTestId('albums-page-1');
   expect(AlbumsPageElement).toBeInTheDocument()
});
