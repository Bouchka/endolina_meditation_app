import { Chapter } from '../types/meditation';
import { ChapterCard } from './cards/ChapterCard';

interface Props {
  chapters: Chapter[];
}

export function ChapterList({ chapters }: Props) {
  return (
    <div className="space-y-4">
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          isExpanded={false}
          onToggle={() => {}}
        />
      ))}
    </div>
  );
}