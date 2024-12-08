import { Chapter } from '../../types/meditation';

interface Props {
  chapter: Chapter;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ChapterCard({ chapter, isExpanded, onToggle }: Props) {
  const chapterName = chapter.title.split(' ')[1].charAt(0) + 
                     chapter.title.split(' ')[1].slice(1).toLowerCase();
  
  return (
    <button
      className="w-full text-left"
      onClick={onToggle}
    >
      <div 
        className="p-4 rounded-xl"
        style={{ backgroundColor: chapter.color }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <img 
                src={`/icons/chapters/${chapterName}.png`}
                alt=""
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <h2 className="text-xl font-sans text-primary">
              {chapter.title}
            </h2>
          </div>
          <span className="text-xl text-primary">
            {isExpanded ? '▼' : '▶'}
          </span>
        </div>
      </div>
    </button>
  );
}