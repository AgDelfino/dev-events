export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  time: string;
  date: string;
};

// Popular developer conferences and hackathons.
// Images correspond to files in public/images.
export const events: Event[] = [
  {
    title: 'AWS re:Invent',
    image: '/images/event1.png',
    slug: 'aws-reinvent',
    location: 'Las Vegas, NV, USA',
    time: '9:00 AM – 5:00 PM PT',
    date: 'December 1–5, 2026',
  },
  {
    title: 'Google I/O',
    image: '/images/event2.png',
    slug: 'google-io',
    location: 'Shoreline Amphitheatre, Mountain View, CA, USA',
    time: '10:00 AM – 6:00 PM PT',
    date: 'May 13–14, 2026',
  },
  {
    title: 'Microsoft Build',
    image: '/images/event3.png',
    slug: 'microsoft-build',
    location: 'Seattle, WA, USA',
    time: '9:00 AM – 5:30 PM PT',
    date: 'May 26–28, 2026',
  },
  {
    title: 'HackMIT',
    image: '/images/event4.png',
    slug: 'hackmit',
    location: 'MIT, Cambridge, MA, USA',
    time: '48-hour hackathon',
    date: 'September 2026 (TBA)',
  },
  {
    title: 'PyCon US',
    image: '/images/event5.png',
    slug: 'pycon-us',
    location: 'Pittsburgh, PA, USA',
    time: '9:00 AM – 5:00 PM ET',
    date: 'April 22–30, 2026',
  },
  {
    title: 'React Summit',
    image: '/images/event6.png',
    slug: 'react-summit',
    location: 'Amsterdam, Netherlands',
    time: '9:00 AM – 6:00 PM CET',
    date: 'June 12–13, 2026',
  },
];
