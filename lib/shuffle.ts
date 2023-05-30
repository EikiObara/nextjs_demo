export const shuffleString = (input: string): string => {
  const characters = input.split('');
  let currentIndex = characters.length;

  while(0 !== currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    const temporaryValue = characters[currentIndex];
    characters[currentIndex] = characters[randomIndex];
    characters[randomIndex] = temporaryValue;
  }

  return characters.join('');
}
