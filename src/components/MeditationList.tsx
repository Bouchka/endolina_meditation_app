import { useState } from 'react';
import { chapters } from '../data/chapters';
import { useProgressStore } from '../store/useProgressStore';
import { Logo } from './ui/Logo';
import { ChapterCard } from './cards/ChapterCard';
import { MeditationCard } from './cards/MeditationCard';
import { AuthHeader } from './auth/AuthHeader';

export function MeditationList() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>('warrior');
  const { completedMeditations } = useProgressStore();

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />
      
      <div className="p-6 max-w-2xl mx-auto">
        <Logo />
        
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div key={chapter.id}>
              <ChapterCard
                chapter={chapter}
                isExpanded={expandedChapter === chapter.id}
                onToggle={() => setExpandedChapter(
                  expandedChapter === chapter.id ? null : chapter.id
                )}
              />

              {expandedChapter === chapter.id && (
                <div className="mt-2 space-y-2 pl-4">
                  {chapter.meditations.map((meditation) => (
                    <MeditationCard
                      key={meditation.id}
                      meditation={meditation}
                      isCompleted={completedMeditations.includes(meditation.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}