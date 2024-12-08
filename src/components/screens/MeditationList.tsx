import { useParams, Link } from 'react-router-dom';
import { chapters } from '../../data/chapters';
import { useProgressStore } from '../../store/useProgressStore';
import { ChakraIcon } from '../ui/ChakraIcon';

export function MeditationList() {
  const { chapterId } = useParams();
  const chapter = chapters.find(c => c.id === chapterId);
  const { completedMeditations } = useProgressStore();

  if (!chapter) return null;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <ChakraIcon 
            chakraNumber={chapters.findIndex(c => c.id === chapter.id) + 1} 
            className="mr-3"
          />
          <h1 className="text-2xl font-medium text-primary">
            {chapter.title}
          </h1>
        </div>
      </div>
      
      <div className="space-y-4">
        {chapter.meditations.map((meditation, index) => {
          const isCompleted = completedMeditations.includes(meditation.id);
          
          return (
            <Link
              key={meditation.id}
              to={`/meditation/${meditation.id}`}
              className="block"
            >
              <div 
                className={`meditation-card ${isCompleted ? 'completed' : ''}`}
              >
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4" 
                    style={{ backgroundColor: chapter.color }}
                  >
                    <ChakraIcon chakraNumber={index + 1} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary">
                      {meditation.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Day {index + 1} • {meditation.duration}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}