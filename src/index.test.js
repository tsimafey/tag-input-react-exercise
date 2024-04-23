import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TagInput } from './index';

describe('TagInput Component', () => {
  test('renders the TagInput component', () => {
    const { getByTestId } = render(
      <TagInput
        handleSaveButtonClick={() => null}
        handleRemoveTagClick={() => null}
      />,
    );
    const tagInputComponent = getByTestId('tag-input');
    expect(tagInputComponent).toBeInTheDocument();
  });
});
