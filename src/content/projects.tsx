import makeIt01 from '../images/projects/makeIt01.png';
import makeIt02 from '../images/projects/makeIt02.png';
import makeIt03 from '../images/projects/makeIt03.png';

import { FaGithub } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaWindowRestore } from 'react-icons/fa';

import orderUp01 from '../images/projects/orderUp01.png';
import orderUp02 from '../images/projects/orderUp02.png';
import orderUp03 from '../images/projects/orderUp03.png';

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
      'MakeIt was my capstone project from my time with Flatiron School.  It is a place for creative and handy makers to write and publish written tutorials.  The goal of the project was to lean a new tech stack and as well as showcase some of my learning during my courses.',
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
        label: 'View Site',
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
      '_description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis corrupti repellat accusantium eligendi molestiae unde laborum temporibus ipsa, reprehenderit, fugit ad ut explicabo enim culpa officia vitae! Assumenda, voluptatum.',
    links: [
      {
        label: 'Demo',
        url: 'https://www.youtube.com/watch?v=wMUJNUr6iXg',
        icon: <FaVideo />
      },
      {
        label: 'Github',
        url: 'https://github.com/dannyirwin/order-up-frontend/settings/pages',
        icon: <FaGithub />
      },
      {
        label: 'View Site',
        url: 'https://dannyirwin.github.io/order-up-frontend/',
        icon: <FaWindowRestore />
      }
    ]
  }
];
