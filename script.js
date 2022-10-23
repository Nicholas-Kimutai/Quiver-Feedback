var modalBtn=document.querySelector('.modal-btn');
var modalFeedback=document.querySelector('.modal-feedback');
var modalClose=document.querySelector('.close-feedback-modal');


var popup=document.querySelector('.submission');
var openPopup=document.querySelector('.popupConfirmation');
var popClose=document.querySelector('.popclose');

modalBtn.addEventListener('click',function(){
    modalFeedback.classList.add('show');
});

modalClose.addEventListener('click',function(){
    modalFeedback.classList.remove('show');
});

popup.addEventListener('click',function(){
    modalFeedback.classList.add('open');
});

popClose.addEventListener('click',function(){
    modalFeedback.classList.remove('open');
});


//Feedback submission validation
// function formSub(){
//     preventDefault();
//     var identity=document.getElementById("identity").value;
//     var category=document.getElementById("category").value;
//     var message=document.getElementById("message").value;

//     if(identity=="identity"){
//         swal("Please select your identity")
//     }
//     else if(category=="category"){
//         alert("Please select feedback")
//     }
//     else if(message==""){
//         alert("Please enter your message")
//     }
//     else{
        
//     }
//  }

//  //Email validation
// function validMail($email) {
//     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailReg.test($email);
//   }
