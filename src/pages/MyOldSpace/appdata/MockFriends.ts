import { Friend } from '../components/TopFriends';
import CSS3 from '../assets/CSS3.svg';
import HTML5 from '../assets/HTML5.svg';
import JavaScript from '../assets/JavaScript.svg';
import ReactIcon from '../assets/React.svg';
import TypeScript from '../assets/TypeScript.svg';
import NodeJS from '../assets/NodeJS.svg';
import MaterialUI from '../assets/MaterialUI.svg';
import Jest from '../assets/Jest.svg';

export const mockFriends: Friend[] = [
  {
    name: 'React',
    image: ReactIcon,
    profileLink: 'https://react.dev/',
  },
  {
    name: 'TypeScript',
    image: TypeScript,
    profileLink: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Node.js',
    image: NodeJS,
    profileLink: 'https://nodejs.org/',
  },
  {
    name: 'JavaScript',
    image: JavaScript,
    profileLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Material UI',
    image: MaterialUI,
    profileLink: 'https://mui.com/',
  },
  {
    name: 'HTML5',
    image: HTML5,
    profileLink: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5/',
  },
  {
    name: 'Jest',
    image: Jest,
    profileLink: 'https://jestjs.io/',
  },
  {
    name: 'CSS3',
    image: CSS3,
    profileLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/',
  },
];
