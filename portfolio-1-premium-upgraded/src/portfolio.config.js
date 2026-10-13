// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to make the portfolio yours.
//  Everything you see on the page comes from here.
//
//  1. Replace the sample text with your own.
//  2. Replace every link that contains "your-username" or "your-" with a real one.
//  3. Replace public/resume.pdf with your own resume (keep the same file name).
//  4. Add your portrait as src/assets/profile.jpg and screenshots as src/assets/projects/<project id>.png.
//  5. Set sampleMode to false to remove the sample-content bar. Links that still contain "your-" are then hidden.
//
//  Only write what is true. Recruiters open your links and read your code.
// ─────────────────────────────────────────────────────────────

const config = {
  // Shows a slim "sample content" bar at the top. Set to false when you publish.
  sampleMode: true,

  site: {
    title: 'Aarav Mehta | Full Stack Developer',
    description:
      'Portfolio of Aarav Mehta, a full stack developer building with React, Node.js and SQL.',
  },

  person: {
    name: 'Aarav Mehta',
    firstName: 'Aarav',
    lastName: 'Mehta',
    initials: 'AM',
    headline: 'Full stack developer building with React, Node.js and SQL.',
    status: 'Open to internships and junior developer roles',
    email: 'aarav.mehta@example.com',
    linkedin: 'https://www.linkedin.com/in/your-username',
    github: 'https://github.com/your-username',
    // Put your resume in the public folder as resume.pdf
    resume: 'resume.pdf',
    // Your portrait: add it as src/assets/profile.jpg (portrait, about 4:5, 800 x 1000 or larger). No config change needed.
    // Until then a neutral placeholder is shown. Transparent PNG cut-outs also work.
    photoAlt: 'Portrait of Aarav Mehta',
  },

  about: {
    paragraphs: [
      'I am a Computer Science graduate who builds full stack web apps and deploys them. In the last two years I shipped four projects, including a task manager used by 40+ classmates and a campus event finder built with a team of four in 24 hours.',
      'I enjoy the whole path from database schema to deployed page. I write tests, keep code readable and add README files that let someone else run the project.',
    ],
    facts: [
      { label: 'Focus', value: 'Full stack web development' },
      { label: 'Education', value: 'B.Tech, Computer Science, 2025' },
      { label: 'Looking for', value: 'Internships and junior developer roles' },
      { label: 'Work mode', value: 'Remote or on-site' },
    ],
  },

  // Keep this to your 3 or 4 strongest projects. Every project needs a live demo
  // and a source link. A broken link costs you more than a missing project.
  projects: [
    {
      id: 'task-manager',
      problem: 'Classmates tracked group work in chat threads, so deadlines and owners kept getting lost.',
      contribution: 'Designed the database and API, built the React interface and handled deployment on my own.',
      name: 'Task Manager Web App',
      summary: 'Full stack task manager with login, priorities and filters.',
      period: 'Jan 2025 to Mar 2025',
      role: 'Solo project',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: 'https://your-task-manager.vercel.app',
      github: 'https://github.com/your-username/task-manager',
      highlights: [
        'Built JWT login, task CRUD and priority filters on a React and Express REST API.',
        'Designed 8 API endpoints and a MongoDB schema. Page load time fell by 30% to under 1.5 seconds.',
        'Deployed on Vercel and Render with a GitHub Actions pipeline. 40+ classmates used it during the final semester.',
      ],
    },
    {
      id: 'event-finder',
      problem: 'Students missed fest events because listings were spread across posters and group chats.',
      contribution: 'Led the team, owned the front end and the Firebase authentication.',
      name: 'Team Event Finder',
      summary: 'Campus event finder built in 24 hours with a team of four.',
      period: 'Aug 2024 to Sep 2024',
      role: 'Team lead, 4 developers',
      stack: ['React', 'Firebase', 'Jest', 'Agile'],
      live: 'https://your-event-finder.vercel.app',
      github: 'https://github.com/your-username/event-finder',
      highlights: [
        'Led a team of 4 through agile sprints to deliver the app in 24 hours. 150+ students used it at the fest.',
        'Owned the front end and Firebase authentication.',
        'Wrote 15 unit tests with Jest (80% coverage) and reviewed 10+ peer pull requests.',
      ],
    },
    {
      id: 'expense-tracker',
      problem: 'Notes apps gave no monthly view of where the money went.',
      contribution: 'Built the whole app: authentication, real-time sync and the spending charts.',
      name: 'Expense Tracker',
      summary: 'Expense tracker with real-time sync and monthly charts.',
      period: 'Oct 2024 to Dec 2024',
      role: 'Solo project',
      stack: ['JavaScript', 'Firebase', 'Charts'],
      live: 'https://your-expense-tracker.vercel.app',
      github: 'https://github.com/your-username/expense-tracker',
      highlights: [
        'Created a responsive tracker with Firebase authentication and real-time sync. 60+ active users.',
        'Added monthly spending charts and category filters, which cut manual tracking effort by 50%.',
      ],
    },
    {
      id: 'result-portal',
      problem: 'Finding a result meant searching paper sheets and spreadsheets.',
      contribution: 'Modelled the database, wrote the SQL queries and the setup README.',
      name: 'Student Result Portal',
      summary: 'Result lookup system for 500+ student records.',
      period: 'Jul 2024 to Aug 2024',
      role: 'Solo project',
      stack: ['Python', 'MySQL', 'SQL'],
      live: 'https://your-result-portal.example.com',
      github: 'https://github.com/your-username/result-portal',
      highlights: [
        'Wrote 12 SQL queries with joins across 4 tables. Result lookup dropped from 5 minutes to under 10 seconds.',
        'Debugged and fixed 12 query errors. The README setup steps helped 5 peers run the project locally.',
      ],
    },
  ],

  // "usedIn" must match project names above. It shows recruiters where each skill is proven.
  skills: [
    {
      group: 'Languages',
      items: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
      usedIn: ['Task Manager Web App', 'Student Result Portal'],
    },
    {
      group: 'Front end',
      items: ['React', 'Tailwind CSS', 'Responsive design'],
      usedIn: ['Task Manager Web App', 'Team Event Finder'],
    },
    {
      group: 'Back end and databases',
      items: ['Node.js', 'Express.js', 'REST API', 'MySQL', 'MongoDB', 'Firebase'],
      usedIn: ['Task Manager Web App', 'Expense Tracker', 'Student Result Portal'],
    },
    {
      group: 'Tools and practice',
      items: ['Git', 'GitHub', 'Postman', 'Jest', 'Debugging', 'Code review', 'Agile', 'Scrum'],
      usedIn: ['Team Event Finder'],
    },
    {
      group: 'DevOps and cloud (basics)',
      items: ['Docker', 'CI/CD with GitHub Actions', 'AWS EC2 and S3'],
      usedIn: ['Task Manager Web App'],
    },
  ],

  // Oldest first. The line on the page fills in as you scroll down this list.
  education: [
    {
      date: 'Aug 2021 to May 2025',
      title: 'B.Tech in Computer Science and Engineering',
      detail:
        'Sample Institute of Technology. CGPA 8.1 / 10. Coursework: Data Structures, DBMS, Operating Systems, Computer Networks, Web Technologies.',
    },
    {
      date: '2023 to 2024',
      title: 'Coding Club member',
      detail: 'Ran 3 workshops on Git and GitHub for 60+ students.',
    },
    {
      date: 'Mar 2024',
      title: 'Full Stack Web Development Certificate',
      detail: 'Sample Online Academy.',
    },
    {
      date: 'Jun 2024',
      title: 'Cloud Practitioner Essentials (AWS basics)',
      detail: 'Sample Online Academy.',
    },
    {
      date: '2024',
      title: 'College Hackathon, team lead',
      detail: 'Finalist among 60+ teams.',
    },
  ],

  contact: {
    intro: 'Email is the fastest way to reach me.',
  },

  // Set to false to remove the small credit line in the footer.
  showCredit: true,
};

export default config;
