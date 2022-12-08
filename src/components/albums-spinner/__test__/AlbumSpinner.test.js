import { render, screen } from '@testing-library/react';
import AlbumSpinner from '../AlbumsSpinner'

test('App should renders Spinner', () => {
    render(<AlbumSpinner />);
    const albumSpinner = screen.getByTestId('spinner-1');
     expect(albumSpinner).toBeInTheDocument()
  });
  

