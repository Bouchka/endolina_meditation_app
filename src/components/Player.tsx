import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { usePlayerStore } from '../store/usePlayerStore';
import { useProgressStore } from '../store/useProgressStore';
import { AudioPlayer } from './audio/AudioPlayer';
import { AudioControls } from './audio/AudioControls';
import { getMediaUrl } from '../utils/cloudinary';
import { useAudioNavigation } from '../hooks/useAudioNavigation';
import { AuthHeader } from './auth/AuthHeader';
import { BackButton } from './ui/BackButton';
import { MeditationDescription } from './meditation/MeditationDescription';
import { CompleteButton } from './meditation/CompleteButton';

export function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const meditation = chapters
    .flatMap(c => c.meditations)
    .find(m => m.id === id);

  const chapter = chapters.find(c => c.id === meditation?.chapter);
  
  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay
  } = usePlayerStore();

  const { markMeditationComplete } = useProgressStore();
  const { hasPrevious, hasNext, previousMeditation, nextMeditation } = useAudioNavigation(id || '');

  if (!meditation || !chapter) return null;

  const dayNumber = chapter.meditations.findIndex(m => m.id === meditation.id) + 1;
  const imageUrl = getMediaUrl('image', chapter.id, dayNumber);
  const audioUrl = getMediaUrl('audio', chapter.id, dayNumber);

  const handlePrevious = () => {
    if (previousMeditation) {
      navigate(`/meditation/${previousMeditation.id}`);
    }
  };

  const handleNext = () => {
    if (nextMeditation) {
      navigate(`/meditation/${nextMeditation.id}`);
    }
  };

  const handleComplete = () => {
    markMeditationComplete(meditation.id);
    navigate('/meditations');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AuthHeader />
      
      <div className="p-6">
        <BackButton />
      </div>

      <img
        src={imageUrl}
        alt=""
        className="w-full aspect-square object-cover"
        onError={(e) => {
          console.error('Image failed to load:', imageUrl);
          e.currentTarget.style.display = 'none';
        }}
      />
      
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-8">
        <h1 className="text-4xl font-serif text-primary mb-8">
          {meditation.title}
        </h1>

        <AudioControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onPlayPause={togglePlay}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
        
        <AudioPlayer audioUrl={audioUrl} />
        
        <MeditationDescription content={meditation.content} />
        
        <CompleteButton onComplete={handleComplete} />
      </div>
    </div>
  );
}