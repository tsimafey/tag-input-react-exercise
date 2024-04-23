import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tags } from './index';

describe('Tags Component', () => {
  test('renders the Tags component', () => {
    const { getByTestId } = render(<Tags handleRemoveTagClick={() => null} />);
    const tagsComponent = getByTestId('tags-container');
    expect(tagsComponent).toBeInTheDocument();
  });
});
