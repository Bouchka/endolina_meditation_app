import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../../data/chapters';
import { usePlayerStore } from '../../store/usePlayerStore';
import { useProgressStore } from '../../store/useProgressStore';
import { IconButton } from '../ui/IconButton';
import { ProgressBar } from '../ui/ProgressBar';

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function Player() {
  const { meditationId } = useParams();
  const navigate = useNavigate();

  const meditation = chapters
    .flatMap((c) => c.meditations)
    .find((m) => m.id === meditationId);

  const chapter = chapters.find((c) => c.id === meditation?.chapter);

  const { isPlaying, currentTime, duration, togglePlay } = usePlayerStore(); // Removed 'setCurrentTime'

  const { markMeditationComplete } = useProgressStore();

  if (!meditation || !chapter) return null;

  const handleComplete = () => {
    markMeditationComplete(meditation.id);
    navigate(`/chapter/${chapter.id}`);
  };

  const handleBack = () => {
    navigate(`/chapter/${chapter.id}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4">
        <button onClick={handleBack} className="text-primary hover:opacity-80">
          ← Back
        </button>
      </div>

      <img src={meditation.image} alt="" className="w-full h-96 object-cover" />

      <div className="flex-1 p-6">
        <h1 className="meditation-title">{meditation.title}</h1>

        <div className="player-controls flex justify-center items-center space-x-8 mb-8">
          <IconButton icon="⏮" onClick={() => {}} className="text-2xl" />
          <IconButton
            icon={isPlaying ? '⏸' : '▶'}
            variant="primary"
            className="w-16 h-16 text-2xl"
            onClick={togglePlay}
          />
          <IconButton icon="⏭" onClick={() => {}} className="text-2xl" />
        </div>

        <div className="mb-8">
          <ProgressBar
            progress={(currentTime / duration) * 100}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{meditation.duration}</span>
          </div>
        </div>

        <div className="space-y-4 text-gray-600">
          {meditation.description.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <button
          className="mark-complete-button w-full"
          onClick={handleComplete}
        >
          MARK AS COMPLETE
        </button>
      </div>
    </div>
  );
}
