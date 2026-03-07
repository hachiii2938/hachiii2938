export type SchoolLifeEntry = {
  id: string;
  title: string;
  semester: string;
  location?: string;
  description: string;
  tags: string[];
  image?: string; // 放在 public/school/ 底下，例如 "orientation-day.webp"
};

export const schoolLifeEntries: SchoolLifeEntry[] = [
  {
    id: 'orientation',
    title: 'Orientation Day',
    semester: 'Year 1 · Semester 1',
    location: 'Campus',
    description:
      'First time meeting new classmates and exploring the campus. Everything felt big and a bit unreal.',
    tags: ['friends', 'campus', 'first day'],
    image: undefined,
  },
  {
    id: 'studio-night',
    title: 'Late Night in Studio',
    semester: 'Year 1 · Semester 2',
    location: 'Art Studio',
    description:
      'Preparing for critique with snacks, music, and sleepy laughter. Tables were full of sketches and color tests.',
    tags: ['studio', 'drawing', 'deadline'],
    image: undefined,
  },
  {
    id: 'exhibition',
    title: 'Small Class Exhibition',
    semester: 'Year 2 · Semester 1',
    location: 'Campus Gallery',
    description:
      'First time seeing my work hanging on a white wall with lights. Nervous, but also quietly happy.',
    tags: ['exhibition', 'installation'],
    image: undefined,
  },
];

