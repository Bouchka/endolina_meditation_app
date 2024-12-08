import { useMemo } from 'react';
import { chapters } from '../data/chapters';
import { Meditation } from '../types/meditation';

export function useAudioNavigation(currentMeditationId: string) {
  return useMemo(() => {
    const allMeditations = chapters.flatMap(c => c.meditations);
    const currentIndex = allMeditations.findIndex(m => m.id === currentMeditationId);

    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < allMeditations.length - 1;

    const previousMeditation: Meditation | null = hasPrevious 
      ? allMeditations[currentIndex - 1] 
      : null;

    const nextMeditation: Meditation | null = hasNext 
      ? allMeditations[currentIndex + 1] 
      : null;

    return {
      hasPrevious,
      hasNext,
      previousMeditation,
      nextMeditation
    };
  }, [currentMeditationId]);
}