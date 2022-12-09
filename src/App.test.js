import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';
import * as albumsTestData from './components/unit-test-mock-data/albums'
import * as usersTestData from './components/unit-test-mock-data/users'

const users = usersTestData.users;   // three users data
const albums = albumsTestData.albums;  // three albums data


test('App should be rendered', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-1');
  expect(appElement).toBeInTheDocument();
});



