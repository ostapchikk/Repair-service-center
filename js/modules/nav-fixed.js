
function navFixed() {
   let header = document.querySelector(".header-section");
   let main = document.querySelector('.main')
   let headerH = document.querySelector(".header-section").clientHeight;

   document.onscroll = function () {
      let scroll = window.scrollY;

      if (scroll > headerH){
         header.classList.add('fixed')
         main.style.paddingTop = headerH + "px";
      } else {
         header.classList.remove('fixed')
         main.removeAttribute('style');
      }
   }
}

export default navFixed;