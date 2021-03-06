import { IUserWordAggregated, IWord } from 'api/interfaces';

export const shuffleWords = (array: IWord[] | IUserWordAggregated[] | string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
