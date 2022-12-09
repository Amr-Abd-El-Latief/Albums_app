import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import PhotoCard from '../PhotoCard'
import * as photosTestData from '../../unit-test-mock-data/photos'


const photo = photosTestData.photos[0];
const photos = photosTestData.photos;   // three Photos data
const ownerTestData = { albumOwner: 'owner_1', albumTitle: 'album_title_1', albumId: 1 };
const wrongPhoto = photosTestData.wrongPhoto;


// photo, ownerData 
test('App should renders Photo Card', () => {
  render(<Router><PhotoCard photo={photo} ownerData={ownerTestData} />
  </Router>);
  const PhotoCardElement = screen.getByTestId('photocard-1');
  expect(PhotoCardElement).toBeInTheDocument();
});


test('Photo Card should contain Photo title', () => {
  render(<Router><PhotoCard photo={photo} ownerData={ownerTestData} />
  </Router>);
  const PhotoCardLabelElement = screen.getByText(/Photo Title:/i);
  expect(PhotoCardLabelElement).toHaveTextContent(photos[0]['title']);
});

test('Photo Card should contain (No data Exist title if title variable not exist >No data for Photo title) Photo title', () => {
  render(<Router><PhotoCard photo={wrongPhoto} ownerData={ownerTestData} />
  </Router>);
  const PhotoCardLabelElement = screen.queryAllByText(/Photo Title:/i)[0];
  expect(PhotoCardLabelElement).toHaveTextContent('No data for Photo title');
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

test('Photo Card should contain img element when run', () => {
  render(<Router><PhotoCard photo={photo} ownerData={ownerTestData} />
  </Router>);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});

 test('Photo Card should contain img which have src with value in style: https://via.placeholder.com/150/00ff ', () => {
  render(<Router><PhotoCard photo={photo} ownerData={ownerTestData} />
  </Router>);
  const imageElement = screen.getByRole('img');
  expect(imageElement.style.backgroundImage).toContain(photos[0].thumbnailUrl);
 });


 test('Photo Card should show Modal when click on img', () => {
    render(<Router><PhotoCard photo={photo} ownerData={ownerTestData} />
    </Router>);
    const PhotoCardhrefElement = screen.getByTestId('photocard-a-1');
    fireEvent.click(PhotoCardhrefElement)
    const photoModalElement = screen.getByTestId('photo-modal-1');
    expect(photoModalElement).toBeInTheDocument();
   });
