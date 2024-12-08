import { IconButton } from '../ui/IconButton';

interface Props {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function PlayerControls({ 
  isPlaying, 
  onPlayPause, 
  onPrevious, 
  onNext,
  hasPrevious,
  hasNext 
}: Props) {
  return (
    <div className="flex justify-center items-center space-x-8 py-6">
      <IconButton 
        icon="⏮" 
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="text-2xl"
      />
      <IconButton 
        icon={isPlaying ? "⏸" : "▶"}
        onClick={onPlayPause}
        variant="primary"
        className="w-16 h-16 text-2xl"
      />
      <IconButton 
        icon="⏭" 
        onClick={onNext}
        disabled={!hasNext}
        className="text-2xl"
      />
    </div>
  );
}