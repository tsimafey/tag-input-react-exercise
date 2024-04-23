import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TagItem } from './index';

describe('TagItem Component', () => {
  const tag = {
    id: '1',
    title: 'Tag Title',
    score: 0,
  };
  const handleRemoveTagClick = jest.fn();

  afterEach(() => {
    handleRemoveTagClick.mockClear();
  });

  test('renders tag title', () => {
    const { getByText } = render(
      <TagItem tag={tag} handleRemoveTagClick={handleRemoveTagClick} />,
    );
    expect(getByText(tag.title)).toBeInTheDocument();
  });

  test('calls handleRemoveTagClick when X button is clicked', () => {
    const { getByLabelText } = render(
      <TagItem tag={tag} handleRemoveTagClick={handleRemoveTagClick} />,
    );
    fireEvent.click(getByLabelText('Remove tag'));
    expect(handleRemoveTagClick).toHaveBeenCalledWith(tag.id);
  });
});
