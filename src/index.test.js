import React from 'react';
import { render } from '@testing-library/react';

import { TagInput } from './index';

describe('TagInput Component', () => {
  test('renders the TagInput component', () => {
    render(<TagInput />);
  });
});
