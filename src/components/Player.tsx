import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { usePlayerStore } from '../store/usePlayerStore';
import { useProgressStore } from '../store/useProgressStore';
import { AudioPlayer } from './audio/AudioPlayer';
import { AudioControls } from './audio/AudioControls';
import { getMediaUrl } from '../utils/cloudinary';
import { useAudioNavigation } from '../hooks/useAudioNavigation';
import { AuthHeader } from './auth/AuthHeader';

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
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AuthHeader />
      
      <div className="p-4">
        <button 
          onClick={() => navigate('/')}
          className="text-primary hover:opacity-80"
        >
          ← Back
        </button>
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
      
      <div className="flex-1 p-6 max-w-2xl mx-auto w-full">
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
        
        <div className="space-y-4 text-gray-600 mt-8">
          {meditation.description.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        
        <button
          onClick={handleComplete}
          className="mark-complete-button w-full"
        >
          MARK AS COMPLETE
        </button>
      </div>
    </div>
  );
}