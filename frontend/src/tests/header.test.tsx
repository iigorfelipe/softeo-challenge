import { render, screen } from '@testing-library/react';
import getAllUser from '../api/getAllUsers';
import Header from '../components/Header';

beforeEach(() => render(<Header />));

describe('Header Component', () => {

  // test('', async () => {
  //   const { data } = await getAllUser();
  //   console.log('DATA>>>>', data);
  // });

});
