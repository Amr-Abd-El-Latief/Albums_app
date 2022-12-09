import { render, fireEvent, screen } from '@testing-library/react';
import PhotosPage from '../PhotosPage';
import { MemoryRouter as Router } from 'react-router-dom';

import * as albumsTestData from '../../components/unit-test-mock-data/albums';
import * as usersTestData  from '../../components/unit-test-mock-data/users';
import * as photosTestData from '../../components/unit-test-mock-data/photos';


const photo = photosTestData.photos[0];
const photos = photosTestData.photos;   // three Photos data
const ownerTestData = { albumOwner: 'owner_1', albumTitle: 'album_title_1', albumId: 1 };
const wrongPhoto = photosTestData.wrongPhoto;

// photos, ownerData, showSpinner, handlePaginatorClickinApp, currentPage, currentPageHandlerinApp, countPerPageinPage, countPerPageHandlerinApp 

test('App should renders PhotosPage', () => {
  render(<Router><PhotosPage showSpinner='false'  ownerData={ownerTestData} photos={photos}  handlePaginatorClickinApp={() => { }}  currentPage='1'   
  countPerPageinPage='20' countPerPageHandlerinApp={() => { }} /></Router>);
  const PhotosPageElement = screen.getByTestId('photos-page-1');
   expect(PhotosPageElement).toBeInTheDocument()
});
