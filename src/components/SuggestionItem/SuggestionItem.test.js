import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SuggestionItem } from './index';

describe('SuggestionItem Component', () => {
  const suggestion = {
    id: '1',
    title: 'Test Title',
    score: 10,
  };
  const setChosenTagsMock = jest.fn();

  test('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <SuggestionItem
        suggestion={suggestion}
        chosenTags={[]}
        setChosenTags={setChosenTagsMock}
      />,
    );
    expect(getByTestId('suggestion-item-1')).toBeInTheDocument();
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('+10')).toBeInTheDocument();
  });

  test('calls setChosenTags with correct arguments when checkbox clicked', () => {
    const { getByTestId } = render(
      <SuggestionItem
        suggestion={suggestion}
        chosenTags={[]}
        setChosenTags={setChosenTagsMock}
      />,
    );
    const checkbox = getByTestId('suggestion-item-1').querySelector(
      'input[type="checkbox"]',
    );
    fireEvent.click(checkbox);
    expect(setChosenTagsMock).toHaveBeenCalledWith([
      {
        id: '1',
        title: 'Test Title',
        score: 10,
      },
    ]);
  });

  test('calls setChosenTags with correct arguments when checkbox clicked twice', () => {
    const { getByTestId } = render(
      <SuggestionItem
        suggestion={suggestion}
        chosenTags={[
          {
            id: '1',
            title: 'Test Title',
            score: 10,
          },
        ]}
        setChosenTags={setChosenTagsMock}
      />,
    );
    const checkbox = getByTestId('suggestion-item-1').querySelector(
      'input[type="checkbox"]',
    );
    fireEvent.click(checkbox);
    expect(setChosenTagsMock).toHaveBeenCalledWith([]);
  });
});
