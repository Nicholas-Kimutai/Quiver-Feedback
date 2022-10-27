
/* - - - getting current year on the footer - - - */
let footerYear = document.querySelector(".current-year");
let currentYear = new Date;
footerYear.innerHTML = String(currentYear.getFullYear());

// Modal variables
let modalShow=document.querySelector('.modal-btn');
let modalFeedback=document.querySelector('.modal-feedback');
let modalClose=document.querySelector('.close-feedback-modal');
let feedbackConfirmation = document.querySelector("#feedbackSubmission");
let feedbackCompletionModal = document.querySelector("#confirmation");
let feedbackCompletion = document.querySelector("#feedComplete");

/* - - - form variables - - -  */
let form = document.getElementById("feedback-form");
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let userPhone = document.getElementById("phone");
let userCategory = document.getElementById("category");
let userMessage = document.getElementById("message");



/* - - - form submission event - - - */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    modalFeedback.style.display = "none";
    feedbackCompletionModal.style.display = "flex";
    
});

/* - - - modal related DOM event listeners - - - */
modalClose.addEventListener("click", () => {
    modalFeedback.style.display = "none";
});
modalShow.addEventListener("click", () => {
    modalFeedback.style.display = "flex";
});

feedbackCompletion.addEventListener("click", () => {
    feedbackCompletionModal.style.display = "none";
    window.location.reload();
});



