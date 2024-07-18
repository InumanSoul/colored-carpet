// src/hooks/useGameLogic.ts
import { useEffect, useState, useRef } from 'react';
import { difficulties, itemsPerLevel } from '../config';
import { generateRandomItems } from '../pages/game/gameLogic';

interface DisplayItem {
  colorClass: string;
  item: string;
  positionClass: string;
}

const useGameLogic = (difficulty: string) => {
  const level = difficulties.find((diff) => diff.name === difficulty)?.value || 1;
  const [displayItems, setDisplayItems] = useState<DisplayItem[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const randomItemsNumber = itemsPerLevel[level as keyof typeof itemsPerLevel];

  const startGame = () => {
    const intervalDuration = 4000 / level;

    const generateAndSetItems = () => {
      const newItems = generateRandomItems(randomItemsNumber);
      setDisplayItems(newItems);
    };

    generateAndSetItems(); // Generate items immediately on start

    intervalRef.current = setInterval(generateAndSetItems, intervalDuration);
  };

  const pauseGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { displayItems, startGame, pauseGame };
};

export default useGameLogic;
