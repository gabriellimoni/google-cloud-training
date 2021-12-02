/**
 * Make random array with 100 itens
 */
export const makeTaskData = () =>
  Array.from({ length: 100 }).map((_, idx) => ({
    id: idx,
    name: `My name is "${idx}"`,
  }));
