export type ContentBlock = {
  type: 'text' | 'heading' | 'quote' | 'list';
  content: string;
  items?: string[];
}

export interface Meditation {
  id: string;
  title: string;
  chapter: string;
  icon: string;
  audioUrl: string;
  image: string;
  content: ContentBlock[];
  duration: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  color: string;
  meditations: Meditation[];
}