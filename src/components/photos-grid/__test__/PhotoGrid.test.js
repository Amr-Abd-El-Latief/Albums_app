import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import PhotosGrid from '../PhotosGrid';
import * as photosTestData from '../../unit-test-mock-data/photos'


const photos = photosTestData.photos;   // three users data
const ownerTestData = { albumOwner: 'owner_1', albumTitle: 'album_title_1', albumId: 1 };

test('App should renders Album Grid', () => {
    render(<Router><PhotosGrid photos={photos} ownerData={ownerTestData} albumClickinPage={() => { }} />
    </Router>);
    const PhotosGridElement = screen.getByTestId('photos-grid-1');
    expect(PhotosGridElement).toBeInTheDocument();
});


test('Photos Grid should have three card elements in it ', () => {
    render(<Router><PhotosGrid photos={photos} ownerData={ownerTestData} albumClickinPage={() => { }} />
    </Router>);
    const PhotosCards = screen.getAllByTestId('photocard-1');
    expect(PhotosCards).toHaveLength(3);
});