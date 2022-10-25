
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
let form = document.querySelector("#feedback-form");
let firstName = document.querySelector("fName");
let lastName = document.querySelector("#lName");
let userPhone = document.querySelector("#phone");
let userCategory = document.querySelector("#category");
let userMessage = document.querySelector("#message");

/* - - - validation function - - - */
function validation(fname,lname, phone, category, message) {
    if (fname === "" || lname === "") {
        return [false, "Fill in your details in the all the fields"];
    }
    else if (category === "Select your feedback category") {
        return [false, "Please select your feedback category"];
    }
    
    else {
        return [true, "Thank you!"];
    }
}


/* - - - form submission event - - - */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validation(firstName.value,lastName.value, userPhone.value, userCategory.value, userMessage.value)) {
        alert(validation(firstName.value,lastName.value, userPhone.value, userCategory.value, userMessage.value));
        return;
    }
});

/* - - - modal related DOM event listeners - - - */
modalClose.addEventListener("click", () => {
    modalFeedback.style.display = "none";
});
modalShow.addEventListener("click", () => {
    modalFeedback.style.display = "flex";
});


feedbackConfirmation.addEventListener("click", () => {
    modalFeedback.style.display = "none";
    // if (!validation(firstName.value,lastName.value, userPhone.value, userCategory.value, userMessage.value)) {
    //     alert(validation(firstName.value,lastName.value, userPhone.value, userCategory.value, userMessage.value));
    //     return;
    // }
    // else {
    //     feedbackCompletionModal.style.display = "flex";
    // }
    feedbackCompletionModal.style.display = "flex";

});
feedbackCompletion.addEventListener("click", () => {
    feedbackCompletionModal.style.display = "none";
    window.location.reload();
});
