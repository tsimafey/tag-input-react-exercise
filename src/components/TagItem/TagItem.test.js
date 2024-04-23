import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TagItem } from './index';

describe('TagItem Component', () => {
  test('renders the TagItem component', () => {
    const { getByText } = render(
      <TagItem title="test tag" handleRemoveTagClick={() => null} />,
    );
    const tagComponent = getByText('test tag');
    expect(tagComponent).toBeInTheDocument();
  });
});
