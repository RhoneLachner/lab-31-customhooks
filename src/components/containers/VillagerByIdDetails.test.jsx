/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagerByIdDetailsResponse from '../fixtures/villagerById.json';
import VillagerByIdDetails from './VillagerByIdDetails';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json(villagerByIdDetailsResponse));
  })
);

describe('VillagerByIdDetials container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a characters details', async() => {
    render(<VillagerByIdDetails match={{ params: { _id: '5f5fb4bbbfd05c2aed82e460' } }} />);

    screen.getByText('loading');

    // await screen.findByText('Admiral');
    // await screen.findByText('cranky');
    // await screen.findByText('bird');
    
    return waitFor(() => {

      screen.getByText('Only quitters give up.', { exact: false });
      screen.getByText('January 27th', { exact: false });
    });
  });
});
