import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Suggestions } from './index';

const mockSuggestions = [
  { title: 'Tag1', score: 1 },
  { title: 'Tag2', score: 2 },
];

const mockChosenTags = ['Tag1'];

describe('Suggestions Component', () => {
  test('renders suggestions correctly', () => {
    const { getByTestId } = render(
      <Suggestions
        list={mockSuggestions}
        chosenTags={mockChosenTags}
        setSearchValue={() => {}}
        handleSaveButtonClick={() => {}}
        saveButtonStyles={{}}
      />,
    );

    mockSuggestions.forEach((suggestion) => {
      expect(
        getByTestId(`suggestion-item-${suggestion.title}`),
      ).toBeInTheDocument();
    });
  });

  test('calls handleSaveButtonClick when save button is clicked', () => {
    const handleSaveButtonClickMock = jest.fn();

    const { getByText } = render(
      <Suggestions
        list={mockSuggestions}
        chosenTags={mockChosenTags}
        setSearchValue={() => {}}
        handleSaveButtonClick={handleSaveButtonClickMock}
        saveButtonStyles={{}}
      />,
    );

    fireEvent.click(getByText('Save'));
    expect(handleSaveButtonClickMock).toHaveBeenCalled();
  });
});
