export const sortSuggestionsBySearchValue = (searchValue, tags) => {
  const tagsCopy = [...tags];
  const searchValueLowerCase = searchValue.toLowerCase();

  return tagsCopy.sort((a, b) => {
    const aMatch = a.title.toLowerCase().includes(searchValueLowerCase);
    const bMatch = b.title.toLowerCase().includes(searchValueLowerCase);

    if (aMatch && !bMatch) {
      return -1;
    }
    if (!aMatch && bMatch) {
      return 1;
    }
    return 0;
  });
};
