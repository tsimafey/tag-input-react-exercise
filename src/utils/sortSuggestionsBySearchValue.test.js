import { sortSuggestionsBySearchValue } from './sortSuggestionsBySearchValue';

describe('sortSuggestionsBySearchValue', () => {
  test('should sort suggestions based on search value', () => {
    const suggestions = [
      { title: 'Apple', score: 0 },
      { title: 'Banana', score: 0 },
      { title: 'Orange', score: 0 },
    ];
    const searchValue = 'an';
    const expectedSortedSuggestions = [
      { title: 'Banana', score: 0 },
      { title: 'Orange', score: 0 },
      { title: 'Apple', score: 0 },
    ];

    const sortedSuggestions = sortSuggestionsBySearchValue(
      searchValue,
      suggestions,
    );

    expect(sortedSuggestions).toEqual(expectedSortedSuggestions);
  });

  test('should handle empty search value', () => {
    const suggestions = [
      { title: 'Apple', score: 0 },
      { title: 'Banana', score: 0 },
      { title: 'Orange', score: 0 },
    ];
    const searchValue = '';
    const expectedSortedSuggestions = suggestions;

    const sortedSuggestions = sortSuggestionsBySearchValue(
      searchValue,
      suggestions,
    );

    expect(sortedSuggestions).toEqual(expectedSortedSuggestions);
  });

  test('should handle empty suggestions array', () => {
    const suggestions = [];
    const searchValue = 'an';
    const expectedSortedSuggestions = [];

    const sortedSuggestions = sortSuggestionsBySearchValue(
      searchValue,
      suggestions,
    );

    expect(sortedSuggestions).toEqual(expectedSortedSuggestions);
  });
});
