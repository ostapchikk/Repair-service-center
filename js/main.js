import Timer from './modules/timer.js';
import maskPhone from './modules/mask-phone.js';
import modal from './modules/modal.js';
import formScript from './modules/form.js';
import navFixed from './modules/nav-fixed.js';
import scrollNav from './modules/scroll.js';
import mapScript from './modules/map.js';
import animationScroll from './modules/animation-scroll.js';

window.addEventListener('DOMContentLoaded', () => {
   Timer();
   maskPhone();
   modal();
   formScript();
   navFixed();
   scrollNav();
   mapScript();
   animationScroll();
})

