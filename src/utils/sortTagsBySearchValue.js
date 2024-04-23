export const sortTagsBySearchValue = (searchValue, tags) => {
  const tagsCopy = [...tags];
  const searchValueLowerCase = searchValue.toLowerCase();

  return tagsCopy.sort((a, b) => {
    if (
      a.title.toLowerCase().includes(searchValueLowerCase) &&
      b.title.toLowerCase().includes(searchValueLowerCase)
    ) {
      return 0;
    }
    if (a.title.toLowerCase().includes(searchValueLowerCase)) {
      return -1;
    }
    if (b.title.toLowerCase().includes(searchValueLowerCase)) {
      return 1;
    }
    return 0;
  });
};
