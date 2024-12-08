export interface Meditation {
  id: string;
  title: string;
  chapter: string;
  icon: string;
  audioUrl: string;
  image: string;
  description: string;
  duration: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  color: string;
  meditations: Meditation[];
}