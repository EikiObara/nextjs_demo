export const shuffleString = (input: string): string => {
  const characters = input.split("");
  let currentIndex = characters.length;

  while (0 !== currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    const temporaryValue = characters[currentIndex];
    characters[currentIndex] = characters[randomIndex];
    characters[randomIndex] = temporaryValue;
  }

  return characters.join("");
};

export const shuffleArray = (input: any[]): any[] => {
  const cloneArray = [...input];

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmp = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmp;
  }

  return cloneArray;
};
