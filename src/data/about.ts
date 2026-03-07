export type Hobby = {
  id: string;
  name: string;
  description: string;
};

export const aboutText = {
  intro:
    "I'm a student exploring illustration, photography, and mixed media. I like to collect small, quiet moments from daily life and turn them into visual stories.",
  studyFocus:
    'Currently studying art & design. I am especially interested in how everyday objects, rooms, and city corners can become characters in a story.',
};

export const hobbies: Hobby[] = [
  {
    id: 'drawing',
    name: 'Sketching & illustration',
    description:
      'Loose sketches of people on the train, plants on my desk, and scenes from school corridors.',
  },
  {
    id: 'photo',
    name: 'Photography diary',
    description:
      'Collecting reflections, window frames, and small objects that feel like they are talking.',
  },
  {
    id: 'music',
    name: 'Music while working',
    description:
      'Soft playlists for late-night studio work, sometimes replaying one song too many times.',
  },
];

