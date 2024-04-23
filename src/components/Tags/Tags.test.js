import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tags } from './index';

describe('Tags Component', () => {
  const tags = [
    {
      id: '1',
      title: 'Tag 1',
      score: 0,
    },
    {
      id: '2',
      title: 'Tag 2',
      score: 0,
    },
    {
      id: '3',
      title: 'Tag 3',
      score: 0,
    },
  ];
  const handleRemoveTagClick = jest.fn();

  beforeEach(() => {
    render(<Tags tags={tags} handleRemoveTagClick={handleRemoveTagClick} />);
  });

  test('renders the tags correctly', () => {
    const tagElements = screen.getAllByTestId('tag-item');
    expect(tagElements).toHaveLength(tags.length);
    tags.forEach((tag, index) => {
      expect(tagElements[index]).toHaveTextContent(tag.title);
    });
  });
});
