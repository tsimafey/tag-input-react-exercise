import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SuggestionItem } from './index';

describe('SuggestionItem Component', () => {
  test('renders the SuggestionItem component', () => {
    const { getByText } = render(
      <SuggestionItem
        title="Test title"
        score={10}
        setChosenTags={() => null}
      />,
    );
    const suggestionItemComponent = getByText('Test title');
    expect(suggestionItemComponent).toBeInTheDocument();
  });
});
