export type WorkKind = 'illustration' | 'photo' | 'mixed' | 'other';

export type Work = {
  id: string;
  title: string;
  year: string;
  medium: string;
  kind: WorkKind;
  description: string;
  image?: string; // 放在 public/works/ 底下，例如 "morning-window.webp"
};

export const works: Work[] = [
  {
    id: 'morning-window',
    title: 'Morning Window',
    year: '2025',
    medium: 'Digital illustration',
    kind: 'illustration',
    description:
      'Soft colors and plants framing the window, trying to capture the feeling before class starts.',
    image: undefined,
  },
  {
    id: 'city-notes',
    title: 'City Notes',
    year: '2024',
    medium: 'Photography + pen drawing',
    kind: 'mixed',
    description:
      'Layered photos of streets with handwritten notes and arrows, like a personal map of the city.',
    image: undefined,
  },
  {
    id: 'room-corner',
    title: 'Quiet Corner of My Room',
    year: '2024',
    medium: 'Film photo',
    kind: 'photo',
    description:
      'A corner full of books, postcards, and a lamp. It changes a little every month.',
    image: undefined,
  },
];

