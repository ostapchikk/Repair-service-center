function modal() {
   const openBtn = document.getElementById("cosnsultation-btn");
   const closeBtn = document.getElementById("consultation-close-btn");
   const consultationModal = document.getElementById("modal-consultation");
   const consultationForm = document.querySelector(".modal__consultation-wrapper");
   const consultationSignUp = document.querySelector(".modal__consultation-accept")
   const signUpBtn = document.querySelector(".modal__form-btn");
   const signUpBtnForm = document.querySelector(".form__btn");

   openBtn.addEventListener("click" ,function(){
      consultationModal.classList.add("open")
   })  
  
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
      }
   })

   document.querySelector("#modal-consultation .modal__wrapper").addEventListener('click', event => {
      event._isClickWithInModal = true;
   });
   consultationModal.addEventListener('click', event => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove('open');
   });

   consultationModal.addEventListener('mouseout', function modalFix() {
 
      if (consultationModal.classList.contains("open")){
         return
      } else {
         consultationForm.classList.remove("none")
         consultationSignUp.classList.add("none")
      }

   })
 
}

export default modal;
