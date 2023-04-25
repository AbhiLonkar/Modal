// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

var modalOverLay = document.querySelector(".modal-overlay");
var openModalButton = document.querySelector(".modal-btn");
var closeBtn = document.querySelector(".close-btn");

openModalButton.addEventListener("click",function(){
    modalOverLay.classList.add("open-modal");
    
})

closeBtn.addEventListener("click",function(){
    modalOverLay.classList.remove("open-modal");
})
