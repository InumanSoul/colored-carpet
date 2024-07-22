// src/utils/gameLogic.ts
import { colors, items, positions, getRandomElement } from '../../config';

export interface DisplayItem {
  colorClass: string;
  item: string;
  positionClass: string;
}

export const generateRandomItems = (maxItems: number): DisplayItem[] => {
  const availableColors = [...colors];
  const numberOfItems = getRandomElement(Array.from({ length: maxItems }, (_, i) => i + 1));
  
  const availablePositions = [...positions]
  
  const newItems: DisplayItem[] = [];
  const usedTypes: Set<string> = new Set();

  for (let i = 0; i < numberOfItems; i++) {
    const chosenColorIndex = Math.floor(Math.random() * availableColors.length);
    const chosenColor = availableColors.splice(chosenColorIndex, 1)[0];

    const positionIndex = Math.floor(Math.random() * availablePositions.length);
    const position = availablePositions.splice(positionIndex, 1)[0];

    let item: string;
    do {
      item = getRandomElement(items);
    } while (
      (item === 'foots' || item === 'hands' || usedTypes.has(item)) && 
      (item !== 'foots' || usedTypes.has('right-foot') || usedTypes.has('left-foot')) &&
      (item !== 'hands' || usedTypes.has('right-hand') || usedTypes.has('left-hand'))
    );

    if (item === 'foots') {
      usedTypes.add('right-foot');
      usedTypes.add('left-foot');
    } else if (item === 'hands') {
      usedTypes.add('right-hand');
      usedTypes.add('left-hand');
    } else {
      usedTypes.add(item);
    }

    newItems.push({
      colorClass: chosenColor.className,
      item,
      positionClass: position.className,
    });
  }

  return newItems;
};