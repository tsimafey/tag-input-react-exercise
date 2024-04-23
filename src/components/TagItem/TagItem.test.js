import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TagItem } from './index';

describe('TagItem Component', () => {
  const title = 'Tag Title';
  const handleRemoveTagClick = jest.fn();

  afterEach(() => {
    handleRemoveTagClick.mockClear();
  });

  test('renders tag title', () => {
    const { getByText } = render(
      <TagItem title={title} handleRemoveTagClick={handleRemoveTagClick} />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  test('calls handleRemoveTagClick when X button is clicked', () => {
    const { getByLabelText } = render(
      <TagItem title={title} handleRemoveTagClick={handleRemoveTagClick} />,
    );
    fireEvent.click(getByLabelText('Remove tag'));
    expect(handleRemoveTagClick).toHaveBeenCalledWith(title);
  });
});
