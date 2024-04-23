import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TextInput } from './index';

describe('TextInput Component', () => {
  const placeholder = 'Enter Tag name';
  const searchValue = 'SearchValue';
  const handleSearchReset = jest.fn();
  const handleInputChange = jest.fn();
  const textInputStyles = { color: 'red' };

  test('renders placeholder correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />,
    );
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('renders search icon correctly', () => {
    const { getByAltText } = render(
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />,
    );
    expect(getByAltText('Search Icon')).toBeInTheDocument();
  });

  test('renders text input with value correctly', () => {
    const { getByDisplayValue } = render(
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />,
    );
    expect(getByDisplayValue(searchValue)).toBeInTheDocument();
  });

  test('calls handleSearchReset function when clear button is clicked', () => {
    const { getByLabelText } = render(
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />,
    );
    fireEvent.click(getByLabelText('Reset button'));
    expect(handleSearchReset).toHaveBeenCalledTimes(1);
  });

  test('calls handleInputChange function when input value is changed', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder={placeholder}
        searchValue={searchValue}
        handleSearchReset={handleSearchReset}
        handleInputChange={handleInputChange}
        textInputStyles={textInputStyles}
      />,
    );
    fireEvent.change(getByPlaceholderText(placeholder), {
      target: { value: 'New Value' },
    });
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});
