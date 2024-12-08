import { Link } from 'react-router-dom';
import { chapters } from '../../data/chapters';
import { useProgressStore } from '../../store/useProgressStore';

export function ChapterList() {
  const { completedMeditations } = useProgressStore();

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-center text-primary">
          28 days program<br />
          to <span className="text-primary">#claimyourcycle</span>
        </h1>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter) => {
          const completedCount = chapter.meditations.filter(
            m => completedMeditations.includes(m.id)
          ).length;

          return (
            <Link key={chapter.id} to={`/chapter/${chapter.id}`}>
              <div
                className="chapter-card"
                style={{ backgroundColor: chapter.color }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{chapter.icon}</span>
                  <h2 className="text-xl font-medium text-primary">
                    {chapter.title}
                  </h2>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{
                        width: `${(completedCount / chapter.meditations.length) * 100}%`
                      }}
                    />
                  </div>
                  <span className="ml-3 text-sm text-primary/70">
                    {completedCount}/{chapter.meditations.length}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}