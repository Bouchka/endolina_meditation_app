import { BackButton } from '../ui/BackButton';
import { Chapter } from '../../types/meditation';

interface Props {
  chapter: Chapter;
  meditationTitle: string;
}

export function MeditationHeader({ chapter, meditationTitle }: Props) {
  return (
    <div className="p-6 max-w-2xl mx-auto w-full">
      <BackButton />
      <h1 className="text-4xl font-serif text-primary mt-4">
        {meditationTitle}
      </h1>
      <div className="flex items-center mt-2">
        <div 
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: chapter.color }}
        />
        <span className="text-sm text-gray-600">{chapter.title}</span>
      </div>
    </div>
  );
}