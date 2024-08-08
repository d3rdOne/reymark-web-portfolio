import { Project } from "./app/core/models/project";

export const PROJECTS: Project [] = [
  {
    snapshot: '',
    title:'Personal Website',
    url: 'https://mrcsbcls.vercel.app',
    sourceCode: 'https://github.com/d3rdOne/reymark-web-portfolio',
    description: `This is this website. A personal project which allows me to showcase my different projects.`,
    technologies: [
      {label: 'Angular', imgUrl: 'tools/angular.svg'},
      {
        label: 'Tailwind',
        imgUrl: 'tools/tailwindcss.svg'
      }
    ]
  },

  {
    snapshot: 'projects/speechbox.png',
    title: 'Speech Box',
    url: 'https://speech-box.vercel.app',
    sourceCode: 'https://github.com/d3rdOne/speech-box',
    description: `Speech Box is an application that allows you to create, view and edit speeches. This a personal project I developed to stay relevant with my skills in Angular after few months of career break. The user interface is inspired by a famous mail service.`,
    technologies: [{
      label: 'Angular',
      imgUrl: 'tools/angular.svg'
    }, {
      label: 'Bootstrap',
      imgUrl: 'tools/bootstrap.svg'
    }, {
      label: 'NGRX',
      imgUrl: 'tools/ngrx.svg'
    }]
  },
  {
    snapshot: '',
    title:`Anime Search app`,
    url: 'https://anime-search-app-psi.vercel.app/',
    sourceCode: 'https://github.com/d3rdOne/anime-search-app',
    description: `This is a personal project I developed while learning React and Tailwind during my career break. This utilizes API from https://jikan.moe/.`,
    technologies: [{label: 'React', imgUrl: 'tools/react.svg'},
      {
        label: 'Axios',
        imgUrl: 'tools/axios.svg'
      },
      {
        label: 'Tailwind',
        imgUrl: 'tools/tailwindcss.svg'
      }
    ]
  }
]