import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  completedMeditations: string[];
  markMeditationComplete: (id: string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedMeditations: [],
      markMeditationComplete: (id) => 
        set((state) => ({
          completedMeditations: [...state.completedMeditations, id]
        })),
    }),
    {
      name: 'meditation-progress'
    }
  )
);