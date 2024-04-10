console.log("loaded js")
// var content = document.querySelector(".card-content");
var seeMoreButtons=document.querySelectorAll('.seeMoreButton');
// var content = this.previousElementSibling;
// seeMoreButton.addEventListener('click',function(event){
seeMoreButtons.forEach(button=>{
    button.addEventListener('click',function(){

        var card=this.closest('.card');
        var content=card.querySelector('.card-content')

        if (content.style.display === 'none' || content.style.display=="") {
            content.style.display = 'block';
            this.textContent = 'See Less';
        } else {
            content.style.display = 'none';
            this.textContent = 'See More';
        }
    });
});

function toggleCardHeight(cardId) {
    let card = document.getElementById(cardId);
    console.log(card)
    if(card.style.height=="auto"){
        card.style.height ='600px';
    }
    else{
        card.style.height='auto';
    }
}