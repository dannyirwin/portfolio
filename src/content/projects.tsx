import {
  FaGithub,
  FaPencilAlt,
  FaVideo,
  FaWindowRestore
} from 'react-icons/fa';

import makeIt01 from '../images/projects/makeIt01.png';
import makeIt02 from '../images/projects/makeIt02.png';
import makeIt03 from '../images/projects/makeIt03.png';

import orderUp01 from '../images/projects/orderUp01.png';
import orderUp02 from '../images/projects/orderUp02.png';
import orderUp03 from '../images/projects/orderUp03.png';

import space01 from '../images/projects/space01.png';
import space02 from '../images/projects/space02.png';
import spaceGif from '../images/projects/spaceGif.gif';

import sampL01 from '../images/projects/sampL01.png';
import sampL02 from '../images/projects/sampL02.png';
import sampL03 from '../images/projects/sampL03.png';
import sampL04 from '../images/projects/sampL04.png';
import sampL05 from '../images/projects/sampL05.png';

import sightless01 from '../images/projects/sightless01.png';

import genArt01 from '../images/projects/genArt01.png';
import genArt02 from '../images/projects/genArt02.png';
import genArt03 from '../images/projects/genArt03.png';

export const projects = [
  // {
  //   title: '_title',
  //   previewImage: '_previewImage',
  //   previewText:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt',
  //   techs: '',
  //   images: [],
  //   description:
  //     '_description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis corrupti repellat accusantium eligendi molestiae unde laborum temporibus ipsa, reprehenderit, fugit ad ut explicabo enim culpa officia vitae! Assumenda, voluptatum.',
  //   links: [
  //     {
  //       label: 'View Site',
  //       url: '_Url'
  //     }
  //   ]
  // }
  {
    title: 'MakeIt',
    previewImage: makeIt01,
    previewText: 'Publishing community for makers',
    techs:
      'React Redux Node Express Knex Objection JWT Bcrypt PostgreSQL Firebase Heroku',
    images: [makeIt02, makeIt03, makeIt01],
    description:
      'MakeIt was my capstone project from my time with Flatiron School.  It is a place for creative and handy makers to write and publish written tutorials.  The goal of the project was to lean a new tech stack and as well as showcase some of my learning during my courses. This was my first experience using a Node backend and implementing Redux and image hosting on a full-scale project.',
    links: [
      {
        label: 'Demo',
        url: 'https://youtu.be/ctDpw4tNPwM',
        icon: <FaVideo />
      },
      {
        label: 'Github',
        url: 'https://github.com/dannyirwin/makeit',
        icon: <FaGithub />
      },
      {
        label: 'Visit Site',
        url: 'https://makeit-e985d.web.app/',
        icon: <FaWindowRestore />
      }
    ]
  },
  {
    title: 'Order Up!',
    previewImage: orderUp01,
    previewText: 'Online multiplayer card game',
    techs: 'React Rails WebSockets PostgreSQL Heroku',
    images: [orderUp01, orderUp02, orderUp03],
    description:
      'Order Up is an online multiplayer card based on the real world card game, Set. It is a game about collecting combinations of three cards based on patterns.  My goal for this project was to teach myself WebSockets with ActionCable, as well as put to use what we had learned about Ruby on Rails during my bootcamp.  Players can join a public game, host a private one, or practice alone, as well as customize their character avatar and trash talk their friends using in-game live chat.  The site is live with the backend deployed via Heroku.',
    links: [
      {
        label: 'Demo',
        url: 'https://www.youtube.com/watch?v=wMUJNUr6iXg',
        icon: <FaVideo />
      },
      {
        label: 'Github',
        url: 'https://github.com/dannyirwin/order-up-frontend',
        icon: <FaGithub />
      },
      {
        label: 'Visit Site',
        url: 'https://dannyirwin.github.io/order-up-frontend/',
        icon: <FaWindowRestore />
      }
    ]
  },
  {
    title: 'Space Sim',
    previewImage: space01,
    previewText: 'Simulate orbital mechanics using real physics',
    techs: 'JavaScript HTML CSS',
    images: [spaceGif, space01, space02],
    description:
      "I built this project in 2020 before I started my coding classes. I had been trying to push my coding abilities and the time and was waste deep in the popular Three Body Problem trilogy by Chien Lieu. The goal was to somewhat accurately simulate N-Body problems based on real world physics. Each body's position is calculated in real time based on its velocity and the attractive forces between it and its neighbors.",
    links: [
      {
        label: 'Demo',
        url: 'https://www.youtube.com/watch?v=iZnxW0VS7Z8',
        icon: <FaVideo />
      },
      {
        label: 'Github',
        url: 'https://github.com/dannyirwin/Orbital-Physics',
        icon: <FaGithub />
      },
      {
        label: 'Visit Site',
        url: 'https://dannyirwin.github.io/Orbital-Physics/',
        icon: <FaWindowRestore />
      }
    ]
  },
  {
    title: 'SampL',
    previewImage: sampL01,
    previewText: 'Extract a color palette from an image',
    techs: 'React CSS',
    images: [sampL02, sampL05, sampL01, sampL04, sampL03],
    description:
      'SampL is a single page React application that uses a library to extract colors from an image from the web, provides them for the user, and changes the them of the page to match. It was a group project in the second phase of bootcamp and was my first completed react project.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/dannyirwin/phase-2-group-project',
        icon: <FaGithub />
      },
      {
        label: 'Visit Site',
        url: 'https://dannyirwin.github.io/phase-2-group-project/',
        icon: <FaWindowRestore />
      }
    ]
  },
  {
    title: 'SightlessVR',
    previewImage: sightless01,
    previewText: 'VR Audio Haptic Experiment',
    techs: 'UnrealEngine',
    images: [sightless01],
    description: 'Sightless ...',
    links: [
      {
        label: 'Trailer',
        url: 'https://www.youtube.com/watch?v=BqiLSUTwXIo',
        icon: <FaVideo />
      }
    ]
  },
  {
    title: 'Generative Art',
    previewImage: genArt01,
    previewText: 'Making a hobby of Math and Art',
    techs: 'p5',
    images: [genArt01, genArt02, genArt03],
    description: 'The hobby and fun stuff...',
    links: [
      {
        label: 'Circle of Strings',
        url: 'https://editor.p5js.org/dannyirwin/full/_w-aa0Vwl',
        icon: <FaPencilAlt />
      },
      {
        label: 'Blue Silk',
        url: 'https://editor.p5js.org/dannyirwin/full/SrnkCJLOb',
        icon: <FaPencilAlt />
      },
      {
        label: 'Random Dot Walker',
        url: 'https://editor.p5js.org/dannyirwin/full/xa6ACPQ_n',
        icon: <FaPencilAlt />
      }
    ]
  }
];
