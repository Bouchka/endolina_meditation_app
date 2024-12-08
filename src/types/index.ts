import { ParamListBase } from '@react-navigation/native'; // Import ParamListBase

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

export interface NavigationParams extends ParamListBase {
  // Extend ParamListBase
  Chapters: undefined;
  MeditationList: { chapterId: string };
  Player: { meditationId: string };
}
