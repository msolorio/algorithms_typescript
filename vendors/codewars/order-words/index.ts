/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

function getNumFromWord(word: string): number {
  const [num] = word.match(/[1-9]/) || ['0'];
  return parseInt(num);
}

function orderWords(words: string) {
  const wordsArr = words.split(' ');

  const sortedWordsArr = wordsArr.sort((a, b): number => {
    const aNum: number = getNumFromWord(a);
    const bNum: number = getNumFromWord(b);

    return aNum - bNum;
  });

  return sortedWordsArr.join(' ');
}

module.exports = orderWords;

export {}