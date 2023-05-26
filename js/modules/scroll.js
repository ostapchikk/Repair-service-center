function scrollNav() {
   document.querySelectorAll('.header a').forEach(link => {
      link.addEventListener("click", function (e) {
         e.preventDefault();

         const href = this.getAttribute('href').substring(1)

         const scrollTarget = document.getElementById(href)
         
         const topOffSet = 80;
         const elemetPosition = scrollTarget.getBoundingClientRect().top;
         const offSetPosition = elemetPosition - topOffSet;
         
         
         window.scrollBy({
            top: offSetPosition,
            behavior: 'smooth',
         })
         console.log(elemetPosition);
      })
   })
}

export default scrollNav;