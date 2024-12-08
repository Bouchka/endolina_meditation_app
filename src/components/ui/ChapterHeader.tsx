import { Chapter } from '../../types/meditation';

interface Props {
  chapter: Chapter;
}

export function ChapterHeader({ chapter }: Props) {
  const getChapterIcon = (chapterTitle: string) => {
    const name = chapterTitle.split(' ')[1].toLowerCase();
    return `/icons/chapters/${name}.png`;
  };

  return (
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 mr-3">
        <img
          src={getChapterIcon(chapter.title)}
          alt={chapter.title}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      <h2 className="text-xl font-medium text-primary">{chapter.title}</h2>
    </div>
  );
}
