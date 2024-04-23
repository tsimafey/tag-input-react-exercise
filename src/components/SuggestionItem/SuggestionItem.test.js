import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SuggestionItem } from './index';

describe('SuggestionItem Component', () => {
  const title = 'Test Title';
  const score = 10;
  const setChosenTagsMock = jest.fn();

  test('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <SuggestionItem
        title={title}
        score={score}
        chosenTags={[]}
        setChosenTags={setChosenTagsMock}
      />,
    );
    expect(getByTestId('suggestion-item-Test Title')).toBeInTheDocument();
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('+10')).toBeInTheDocument();
  });

  test('calls setChosenTags with correct arguments when checkbox clicked', () => {
    const { getByTestId } = render(
      <SuggestionItem
        title={title}
        score={score}
        chosenTags={[]}
        setChosenTags={setChosenTagsMock}
      />,
    );
    const checkbox = getByTestId('suggestion-item-Test Title').querySelector(
      'input[type="checkbox"]',
    );
    fireEvent.click(checkbox);
    expect(setChosenTagsMock).toHaveBeenCalledWith(['Test Title']);
  });

  test('calls setChosenTags with correct arguments when checkbox clicked twice', () => {
    const { getByTestId } = render(
      <SuggestionItem
        title={title}
        score={score}
        chosenTags={['Test Title']}
        setChosenTags={setChosenTagsMock}
      />,
    );
    const checkbox = getByTestId('suggestion-item-Test Title').querySelector(
      'input[type="checkbox"]',
    );
    fireEvent.click(checkbox);
    expect(setChosenTagsMock).toHaveBeenCalledWith([]);
  });
});
