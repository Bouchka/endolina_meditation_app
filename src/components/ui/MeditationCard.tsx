import clsx from 'clsx';
import { Meditation } from '../../types';
import { formatTime } from '../../utils/timeFormat';

interface Props {
  meditation: Meditation;
  onPress: () => void;
}

export function MeditationCard({ meditation, onPress }: Props) {
  return (
    <div
      onClick={onPress}
      className={clsx('p-4 rounded-lg mb-4 bg-white shadow-md cursor-pointer')}
    >
      <div className="flex items-center">
        <div className="mr-3 text-xl">{meditation.icon}</div>
        <div className="flex flex-col flex-1">
          <div className="text-lg font-medium">{meditation.title}</div>
          <div className="text-sm text-gray-600">
            {formatTime(Number(meditation.duration))} {/* Convert to number */}
          </div>
        </div>
      </div>
    </div>
  );
}
