import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

describe('App', () => {
  it('renders Board', () => {
    const { getByTestId } = render(<Board />);

    const linkElement = getByTestId('Board-container');

    expect(linkElement).toBeInTheDocument();
  });

  it('renders header', () => {
    const { getByText } = render(<Board />);

    const linkElement = getByText('Trello Clone');

    expect(linkElement).toBeInTheDocument();
  });
});
