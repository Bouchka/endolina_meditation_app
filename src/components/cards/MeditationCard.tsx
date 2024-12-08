import { Link } from 'react-router-dom';
import { Meditation } from '../../types/meditation';

interface Props {
  meditation: Meditation;
  isCompleted: boolean;
}

export function MeditationCard({ meditation, isCompleted }: Props) {
  const dayNumber = meditation.icon === '⬤' ? 1 :
                   meditation.icon === '◉' ? 2 :
                   meditation.icon === '◈' ? 3 :
                   meditation.icon === '✦' ? 4 :
                   meditation.icon === '◎' ? 5 :
                   meditation.icon === '◇' ? 6 : 7;

  return (
    <Link
      to={`/meditation/${meditation.id}`}
      className="block"
    >
      <div 
        className={`p-4 rounded-xl bg-white shadow-sm 
                    ${isCompleted ? 'opacity-50' : ''}`}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4 flex items-center justify-center">
            <img 
              src={`/icons/chakras/chakra${dayNumber}.png`}
              alt=""
              className="w-full h-full object-contain"
              loading="eager"
              key={`chakra-icon-${meditation.id}`}
            />
          </div>
          <h3 className="text-lg font-serif text-primary">
            {meditation.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}