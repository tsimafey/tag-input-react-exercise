import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Suggestions } from './index';

describe('Suggestions Component', () => {
  test('renders the Suggestions component', () => {
    const { getByTestId } = render(
      <Suggestions
        setSearchValue={() => null}
        handleSaveButtonClick={() => null}
      />,
    );
    const suggestionsComponent = getByTestId('suggestions-container');
    expect(suggestionsComponent).toBeInTheDocument();
  });
});
