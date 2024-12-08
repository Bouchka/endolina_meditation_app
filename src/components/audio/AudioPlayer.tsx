import { useRef, useEffect } from 'react';
import { usePlayerStore } from '../../store/usePlayerStore';

interface Props {
  audioUrl: string;
}

export function AudioPlayer({ audioUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { 
    isPlaying, 
    setCurrentTime, 
    setDuration 
  } = usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio 
      ref={audioRef}
      src={audioUrl}
      controls={false}
      className="hidden"
      onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      onDurationChange={(e) => setDuration(e.currentTarget.duration)}
    />
  );
}