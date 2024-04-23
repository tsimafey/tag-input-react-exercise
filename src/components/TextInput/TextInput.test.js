import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TextInput } from './index';

describe('TextInput Component', () => {
  test('renders the TextInput component', () => {
    const { getByLabelText } = render(
      <TextInput searchValue="" setSearchValue={() => null} />,
    );
    const textInputElement = getByLabelText('Enter Tag name');
    expect(textInputElement).toBeInTheDocument();
  });

  test('calls onChange handler', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <TextInput searchValue="" setSearchValue={onChangeMock} />,
    );
    const textInputElement = getByLabelText('Enter Tag name');
    fireEvent.change(textInputElement, { target: { value: 'Test input' } });
    expect(onChangeMock).toHaveBeenCalledWith('Test input');
  });

  test('placeholder prop', () => {
    const { getByPlaceholderText } = render(
      <TextInput
        searchValue=""
        setSearchValue={() => null}
        placeholder="Test placeholder"
      />,
    );
    const textInputElement = getByPlaceholderText('Test placeholder');
    expect(textInputElement).toBeInTheDocument();
  });

  test('clearButton is absent if searchValue is empty string', () => {
    const { queryByLabelText } = render(
      <TextInput searchValue="" setSearchValue={() => null} />,
    );
    const buttonElement = queryByLabelText('Reset button');
    expect(buttonElement).not.toBeInTheDocument();
  });

  test('clearButton is present if searchValue is not empty', () => {
    const { getByLabelText } = render(
      <TextInput searchValue="test value" setSearchValue={() => null} />,
    );
    const buttonElement = getByLabelText('Reset button');
    expect(buttonElement).toBeInTheDocument();
  });
});
