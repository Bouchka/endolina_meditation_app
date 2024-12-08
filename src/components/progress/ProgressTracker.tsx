import { useProgressStore } from '../../store/useProgressStore';
import { chapters } from '../../data/chapters';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export function ProgressTracker({ className }: Props) {
  const { completedMeditations } = useProgressStore();

  const lastCompletedMeditation = chapters
    .flatMap((chapter) => chapter.meditations)
    .filter((meditation) => completedMeditations.includes(meditation.id))
    .pop();

  const weekNumber = lastCompletedMeditation
    ? chapters.findIndex(
        (chapter) => chapter.id === lastCompletedMeditation.chapter
      ) + 1
    : 1;

  const dayNumber = lastCompletedMeditation
    ? chapters
        .find((chapter) => chapter.id === lastCompletedMeditation.chapter)
        ?.meditations.findIndex((m) => m.id === lastCompletedMeditation.id) ?? 0
    : 0;

  return (
    <div className={clsx('bg-white rounded-xl shadow-lg p-6', className)}>
      <div className="text-center">
        <h3 className="text-xl font-medium text-primary mb-4">
          Week {weekNumber}
        </h3>
        <div className="h-32 w-1 bg-[#E6F3F0] mx-auto my-4">
          <div
            className="w-full bg-primary rounded-full"
            style={{
              height: `${((dayNumber + 1) / 7) * 100}%`,
              transition: 'height 0.3s ease-in-out',
            }}
          />
        </div>
        <p className="text-sm text-gray-500">
          Day {lastCompletedMeditation ? dayNumber + 1 : 1}
        </p>
      </div>
    </div>
  );
}
