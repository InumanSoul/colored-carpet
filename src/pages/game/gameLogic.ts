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
  const availableItems = [...items];
  const availablePositions = [...positions]
  const newItems = [];

  for (let i = 0; i < numberOfItems; i++) {
    const chosenItemIndex = Math.floor(Math.random() * availableItems.length);
    const item = availableItems.splice(chosenItemIndex, 1)[0];

    const chosenColorIndex = Math.floor(Math.random() * availableColors.length);
    const chosenColor = availableColors.splice(chosenColorIndex, 1)[0];

    const positionIndex = Math.floor(Math.random() * availablePositions.length);
    const position = availablePositions.splice(positionIndex, 1)[0];

    newItems.push({
      colorClass: chosenColor.className,
      item: item,
      positionClass: position.className,
    });
  }

  return newItems;
};