import clsx from 'clsx';
import { Chapter } from '../../types';

interface Props {
  chapter: Chapter;
  onPress: () => void;
}

export function ChapterCard({ chapter, onPress }: Props) {
  return (
    <div
      onClick={onPress}
      className={clsx('p-4 rounded-lg mb-4')}
      style={{ backgroundColor: chapter.color }}
    >
      <div className="text-xl font-medium">
        {chapter.icon} {chapter.title}
      </div>
      <div className="text-sm mt-2 text-gray-600">
        {chapter.meditations.length} meditations
      </div>
    </div>
  );
}
