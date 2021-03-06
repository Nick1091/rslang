import { IWordAnswer } from 'state/interfaces';
import { randomNum } from 'pages/Games/utils/randomNum';
import { sprintState } from 'state';
import { TRANSLATES_COMPARE_AMOUNT } from '../consts';
import { getStorage } from 'pages/LoginAndRegistration';

const changeHTMLWordsText = (word: string, translate: string) => {
  const wordText = document.querySelector('.sprint__answer-eng');
  const translateText = document.querySelector('.sprint__answer-ru');
  if (wordText) wordText.textContent = word;
  if (translateText) translateText.textContent = translate;
};

export const changeAndCompareText = (): IWordAnswer | undefined => {
  if (getStorage('authorizedUser')) {
    const translatesLengthRemainder = sprintState.translates.length - sprintState.wordsUser.length;
    let restOfTranslatesLength = sprintState.translates.length - TRANSLATES_COMPARE_AMOUNT;
    if (translatesLengthRemainder % TRANSLATES_COMPARE_AMOUNT === 0 && translatesLengthRemainder !== 0) {
      const deletedTranslates = sprintState.translates.splice(restOfTranslatesLength, TRANSLATES_COMPARE_AMOUNT);
      restOfTranslatesLength = sprintState.translates.length - deletedTranslates.length;
    }
    const wordObjUser = sprintState.wordsUser.pop();
    const translate = sprintState.translates[randomNum(restOfTranslatesLength, sprintState.translates.length)];
    if (wordObjUser && translate) {
      changeHTMLWordsText(wordObjUser.word, translate);
      return { wordObjUser, isRightTranslate: wordObjUser.wordTranslate === translate };
    }
  } else {
    const translatesLengthRemainder = sprintState.translates.length - sprintState.words.length;
    let restOfTranslatesLength = sprintState.translates.length - TRANSLATES_COMPARE_AMOUNT;
    if (translatesLengthRemainder % TRANSLATES_COMPARE_AMOUNT === 0 && translatesLengthRemainder !== 0) {
      const deletedTranslates = sprintState.translates.splice(restOfTranslatesLength, TRANSLATES_COMPARE_AMOUNT);
      restOfTranslatesLength = sprintState.translates.length - deletedTranslates.length;
    }
    const wordObj = sprintState.words.pop();
    const translate = sprintState.translates[randomNum(restOfTranslatesLength, sprintState.translates.length)];
    if (wordObj && translate) {
      changeHTMLWordsText(wordObj.word, translate);
      return { wordObj, isRightTranslate: wordObj.wordTranslate === translate };
    }
  }
};
