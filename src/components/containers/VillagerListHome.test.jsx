import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagersApiResponse from '../fixtures/villagers.json';
import { MemoryRouter } from 'react-router-dom';
import VillagerListHome from './VillagerListHome';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(villagersApiResponse));
  })
);

describe('VillagerListHome container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of villagers', async() => {
    render(
      <MemoryRouter>
        <VillagerListHome />
      </MemoryRouter>
    );

    screen.getByText('loading');

    const listOfVillagers = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(listOfVillagers).not.toBeEmptyDOMElement();
    });
  });
});
