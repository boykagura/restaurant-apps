import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/header.js';
import { contentRestaurant } from './content';
import { headerResponsive } from '../scripts/header.js';

headerResponsive();

const contentSection = document.getElementById ("content");
const contentElementItem = new contentRestaurant();
contentSection.appendChild(contentElementItem);