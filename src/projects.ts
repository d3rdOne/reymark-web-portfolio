import { Project } from "./app/core/models/project";

export const PROJECTS: Project [] = [
  {
    snapshot: '',
    title:'Personal Website',
    url: 'https://mrcsbcls.vercel.app',
    description: `A personal website written in angular 18`,
    technologies: [{label: 'Angular', imgUrl: 'tools/angular.svg'},
      {
        label: 'Tailwind',
        imgUrl: 'tailwindcss.svg'
      }
    ]
  },

  {
    snapshot: 'projects/speechbox.png',
    title: 'Speech Box',
    url: 'https://speech-box.vercel.app',
    description: `A politician will give many speeches in their political career. Many politicians currently draft their
speeches in an adhoc fashion using Microsoft Word and share versions with their team using
email. This process is inefficient as it does not allow for the users to centrally store, archive and
search their speeches.`,
    technologies: [{
      label: 'Angular',
      imgUrl: 'tools/angular.svg'
    }, {
      label: 'Tailwind',
      imgUrl: 'tailwindcss.svg'
    }]
  },
  {
    snapshot: '',
    title:`Anime Search app`,
    url: 'https://anime-search-app-psi.vercel.app/',
    description: `A personal website written in react 18`,
    technologies: [{label: 'React', imgUrl: 'tools/react.svg'},
      {
        label: 'Tailwind',
        imgUrl: 'tailwindcss.svg'
      }
    ]
  }
]