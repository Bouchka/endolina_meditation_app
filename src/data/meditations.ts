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

export const chapters: Chapter[] = [
  {
    id: 'warrior',
    title: 'THE WARRIOR',
    icon: '✧',
    color: '#E6F3F0',
    meditations: [
      {
        id: 'ground-in-lightness',
        title: 'Ground in Lightness',
        chapter: 'warrior',
        icon: '⬤',
        audioUrl: 'path/to/audio1.mp3',
        image: '~/assets/images/warrior1.jpg',
        description: 'Connect with your inner warrior through grounding practices.',
        duration: '10:00'
      },
      // Add other warrior meditations here
    ]
  },
  // Add other chapters here
];