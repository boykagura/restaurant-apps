import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Apps from './views/app';

const app = new Apps({
    button: document.querySelector('#menu-bars'),
    drawer: document.querySelector('.navbar'),
    content: document.querySelector('#main'),
  });
