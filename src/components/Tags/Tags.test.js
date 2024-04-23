import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tags } from './index';

describe('Tags Component', () => {
  const tags = ['Tag 1', 'Tag 2', 'Tag 3'];
  const handleRemoveTagClick = jest.fn();

  beforeEach(() => {
    render(<Tags tags={tags} handleRemoveTagClick={handleRemoveTagClick} />);
  });

  test('renders the tags correctly', () => {
    const tagElements = screen.getAllByTestId('tag-item');
    expect(tagElements).toHaveLength(tags.length);
    tags.forEach((tag, index) => {
      expect(tagElements[index]).toHaveTextContent(tag);
    });
  });
});
