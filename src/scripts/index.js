/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import Apps from './views/app';


const app = new Apps({
  button: document.querySelector('#menu-bars'),
  content: document.querySelector('#main'),
  navDrawer: document.querySelector('.nav-items'),
});