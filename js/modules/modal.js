function modal() {
   const modalWrapper = document.querySelector(".modal__wrapper")
   const openBtn = document.getElementById("cosnsultation-btn");
   const closeBtn = document.getElementById("consultation-close-btn");
   const consultationModal = document.getElementById("modal-consultation");
   const consultationForm = document.querySelector(".modal__consultation-wrapper");
   const consultationSignUp = document.querySelector(".modal__consultation-accept")
   const signUpBtn = document.querySelector(".modal__form-btn");
   const signUpBtnForm = document.querySelector(".form__btn");
   const phoneCall = document.querySelector(".nav-phone-call")
   const watchBtn = document.querySelector(".watch__btn")
   const videoBtn = document.querySelectorAll(".video__btn")
   const watchModal = document.querySelector("#modal-watch")


   const openModal = function(){
      consultationModal.classList.add("open")
      consultationForm.classList.add("open")
      consultationForm.classList.remove("none")
      consultationSignUp.classList.add("none")
   }

   const openWatchModal = function() {
      watchModal.classList.add("open")
      consultationForm.classList.add("none")
   }

   openBtn.addEventListener("click" , openModal)  


   watchBtn.addEventListener("click" , openWatchModal)  

   videoBtn.forEach((item) => {
      item.addEventListener("click" , openWatchModal)
   })

   phoneCall.addEventListener("click" , openModal);

   closeBtn.addEventListener("click" ,function (){
      consultationModal.classList.remove("open")
   })  
   
   signUpBtn.addEventListener("click", function(){
      consultationForm.classList.add("none")
      consultationSignUp.classList.remove("none")
   })
   
   signUpBtnForm.addEventListener("click", function(){
      consultationModal.classList.add("open")
      consultationForm.classList.add("none")
      consultationSignUp.classList.remove("none")
   })


   window.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
         consultationModal.classList.remove("open")
         watchModal.classList.remove("open")
      }
   })

   document.querySelector("#modal-consultation .modal__wrapper").addEventListener('click', event => {
      event._isClickWithInModal = true;
   });

   let closeModal = event => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove('open');
   }
   consultationModal.addEventListener('click',closeModal);
   watchModal.addEventListener('click', closeModal);
}

export default modal;
