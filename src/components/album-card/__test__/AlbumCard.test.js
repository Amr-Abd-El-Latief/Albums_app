import { render, screen } from '@testing-library/react';
import AlbumCard from '../AlbumCard'

test('App should renders Album Card', () => {
  render(<AlbumCard />);
  const AlbumCardElement = screen.getByTestId('albumcard-1');
   expect(AlbumCardElement).toBeInTheDocument()
});
// test('renders Title of app in Headerr', () => {
//     let album={title: 'first album', albumOwner: 'first'};
//   render(<AlbumCard  album= {album}/>);
//   const AlbumCardElement = screen.getByText(/title/i);
//    expect(AlbumCardElement).toBeInTheDocument();
// });
