import { ContentBlock } from '../../types/meditation';

interface Props {
  content: ContentBlock[];
}

export function MeditationDescription({ content }: Props) {
  return (
    <div className="space-y-6 text-gray-600 mt-8">
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={index} className="text-xl font-serif text-primary">
                {block.content}
              </h2>
            );
          
          case 'quote':
            return (
              <blockquote 
                key={index}
                className="border-l-4 border-primary pl-4 italic"
              >
                {block.content}
              </blockquote>
            );
          
          case 'list':
            return (
              <ul key={index} className="list-disc pl-5 space-y-2">
                {block.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          
          default:
            return (
              <p key={index} className="leading-relaxed">
                {block.content}
              </p>
            );
        }
      })}
    </div>
  );
}