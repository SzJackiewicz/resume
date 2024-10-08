export type ExperienceCardType = 'accordion' | 'card'

export const experience = [
  {
    position: 'Full Stack Developer',
    company: 'WAKACJE.PL',
    period: '01/2023',
    type: 'card' as ExperienceCardType,
    responsibilities: {
      PL: [
        'Praca nad kilkoma aplikacjami, w tym głównym serwisem',
        'Regularne CR',
        'Koordynowanie projektów road-mapowych',
        'Wsparcie menedżera',
        'Reagowanie na awarie i incydenty',
        'Wdrażanie nowych pracowników',
        'Udział w spotkaniach dotyczących architektury',
        'Wdrażanie aplikacji na produkcję',
      ],
      EN: [
        'Working on several applications, including the main service',
        'Conducting code review',
        'Coordinating road-map projects',
        'Supporting team',
        'Responding to failures and incidents',
        'New employee onboarding',
        'Participating in meetings about application architecture',
        'Deploying the application to production',
      ],
    },
    technologies: ['React', 'TypeScript', 'Next', 'Prisma', 'Node', 'MobX', 'Zod', 'CI/CI'],
  },
  {
    position: 'Front-end Developer',
    company: 'DeveloArt',
    period: '11/2022 - 11/2023',
    type: 'card',
    responsibilities: {
      PL: [
        'Praca dorywcza/nieodpłatna',
        'Wsparcie stażystów',
        'Utrzymywanie czystego kodu w aplikacji',
        'Wybór narzędzi',
        'Code review',
        'Doskonalenie własnych umiejętności programistycznych',
        'Planowanie zadań',
      ],
      EN: [
        'Casual/Unpaid Work',
        'Supporting interns',
        'Maintaining clean code in the application',
        'Tools selection',
        'Code review',
        'Improving own programming skills',
        'Tasks planning',
      ],
    },
    technologies: ['React', 'TypeScript', 'Next', 'Tailwind', 'Zustand', 'Hook form', 'RTK'],
  },
  {
    position: 'Junior Front-end Developer',
    company: 'WAKACJE.PL',
    period: '08/2021 - 01/2023',
    type: 'card',
    responsibilities: {
      PL: [
        'Praca nad kilkoma aplikacjami, w tym głównym serwisem',
        'Regularne CR',
        'Koordynowanie projektów road-mapowych',
        'Reagowanie na awarie i incydenty',
        'Koordynacja spotkań "Devs for Devs"',
      ],
      EN: [
        'Working on several applications, including the main service',
        'Conducting code review',
        'Coordinating road-map projects',
        'Responding to failures and incidents',
        'Coordinating "Devs for Devs" meetings',
      ],
    },
    technologies: ['Redux', 'HTML', 'CSS', 'MobX', 'JavaScript'],
  },
  {
    position: 'Sales Manager',
    company: 'Alior Bank',
    period: '09/2016 - 05/2021',
    type: 'accordion',
    responsibilities: {
      PL: [
        'Zarządzanie zespołem',
        'Rekrutacja',
        'Prowadzenie szkoleń',
        'Weryfikacja dokumentów kredytowych',
        'Udzielanie informaji zwrotnej',
        'Regularne raportowanie sprzedaży',
      ],
      EN: [
        'Team management',
        'Recruitment',
        'Sales Training',
        'Credit document verification',
        'Providing feedback',
        'Regular sales reporting',
      ],
    },
  },
  {
    position: 'Manager',
    company: 'CCIG',
    period: '09/2014 - 09/2016',
    type: 'accordion',
    responsibilities: {
      PL: [
        'Zarządzanie zespołem',
        'Rekrutacja',
        'Prowadzenie szkoleń',
        'Negocjacje umów z kontrahentami',
        'Zarządzanie projektem',
        'Udzielanie informaji zwrotnej',
        'Koordynowanie zespołów sprzedażowych oraz back-office',
      ],
      EN: [
        'Team management',
        'Recruitment',
        'Sales Training',
        'Negotiating contracts with clients',
        'Project management',
        'Providing feedback',
        'Coordinating sales teams and back-office',
      ],
    },
  },
  {
    position: 'Sales Manager',
    company: 'NorthTel',
    period: '09/2013 - 09/2014',
    type: 'accordion',
    responsibilities: {
      PL: ['Monitoring rozmów', 'Udzielanie informaji zwrotnej', 'Raportowanie sprzedaży', 'Prowadzenie szkoleń', 'Zarządzanie zespołem'],
      EN: ['Call monitoring', 'Providing feedback', 'Sales reporting', 'Sales Training', 'Team management'],
    },
  },
  {
    position: 'Section Manager',
    company: 'Orange',
    period: '09/2011 - 09/2012',
    type: 'accordion',
    responsibilities: {
      PL: ['Monitoring rozmów', 'Udzielanie informaji zwrotnej', 'Rekrutacja', 'Prowadzenie szkoleń', 'Zarządzanie zespołem'],
      EN: ['Call monitoring', 'Feedback', 'Recruitment', 'Sales Training', 'Team management'],
    },
  },
  {
    position: 'Telemarketer',
    company: 'Orange',
    period: '07/2010 - 09/2011',
    type: 'accordion',
    responsibilities: {
      PL: ['Pozyskanie nowych klientów', 'Dosprzedaż', 'Szkoenie nowych pracowników'],
      EN: ['New customer acquisition', 'Cross-selling', 'New employee onboarding'],
    },
  },
]

export const headerInfo = {
  PL: {
    first: `Cześć! Dziękuję że przeglądasz moje CV!`,
    second: `Mam na imię Szymon i od ponad 3 lat rozwijam się jako Frontend Developer. Nigdy nie
      wyobrażałem sobie, że po 10 latach pracy jako menedżer zespołu odkryję nową pasję, która całkowicie zmieni moją ścieżkę kariery.`,
  },
  EN: {
    first: `Hi! Thank you for reviewing my CV!`,
    second: `My name is Szymon, and I have been actively working on my professional growth as a Frontend Developer for over 3 years. I never
      imagined that after 10 years of working as a team manager, I would discover a new passion that would completely change my career path.`,
  },
}

export const navigationData = {
  hrefs: ['#about', '#experience', '#education'],
  sections: [
    {
      PL: 'O mnie',
      EN: 'About',
    },
    {
      PL: 'Doświadczenie',
      EN: 'Experience',
    },
    {
      PL: 'Szkolenia i edukacja',
      EN: 'Courses & education',
    },
  ],
}

export const PersonalData = {
  PL: {
    name: 'imię',
    email: 'email',
    phone: 'telefon',
    address: 'adres',
    birthday: 'wiek',
    git: 'git',
    linkedIn: 'linkedIn',
    CV: 'CV',
  },
  EN: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    birthday: 'birthday',
    git: 'git',
    linkedIn: 'linkedIn',
    CV: 'CV',
  },
  data: {
    name: 'Szymon Jackiewicz',
    email: 'sz.jackiewicz@gmail.com',
    phone: '+48 787 320 395',
    address: 'Gdańsk, Poland',
    birthday: '30/05/1988',
    git: 'https://github.com/SzJackiewicz',
    linkedIn: 'https://www.linkedin.com/in/szymon-jackiewicz1988/',
    CV: 'link do cv',
  },
}

export const educationData = [
  {
    company: {
      PL: 'Uniwersytet Gdański',
      EN: 'University of Gdańsk',
    },
    period: '2010 - 2012',
    position: {
      PL: 'Historia, II stopień',
      EN: 'History, II deg',
    },
  },
  {
    company: {
      PL: 'Uniwersytet Szczeciński, I stopień',
      EN: 'University of Szczecin, I deg',
    },
    period: '2007 - 2010',
    position: {
      PL: 'Historia, I stopień',
      EN: 'History, I deg',
    },
  },
  {
    company: {
      PL: 'Liceum Ogólnokształcące w Łobzie',
      EN: 'Hight School of Łobez',
    },
    period: '2004 - 2007',
    position: {
      PL: 'Profil Matematyczno - Informatyczny',
      EN: 'Mathematics and Computer Science',
    },
  },
]

export const courseData = [
  'AI_devs',
  'Opanuj Frontend',
  'CodersLab Bootcamp',
  'Scrum Lab',
  'Lean Management',
  'Team building',
  'Manager ABC',
  'Advanced Excel',
  'Transformational leader',
]
