var burger = document.querySelector(".burger")

var menu = document.querySelector(".menu-navbar")

burger.addEventListener('click', function() {
        menu.classList.toggle('active')
    })
    /* 
     var text = document.querySelector(".spoiler-content")
     var bottom = document.querySelector(".spoiler")

     bottom.addEventListener('click', function() {
         bottom.classList.add('invisible')
         text.classList.add('visible')
     })*/


var spoilers = document.querySelectorAll(".spoiler")


var createSpoiler = function(spoiler) {

    //creer le bouton
    var bouton = document.createElement("button")

    bouton.textContent = "More..."
    bouton.className = 'spoiler-bottom'


    //creer la span qui va contenir le spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = spoiler.innerHTML

    // j  ajoute les element au DOM
    spoiler.innerHTML = ''
    spoiler.appendChild(bouton)
    spoiler.appendChild(span)

    //j observe le click

    bouton.addEventListener('click', function() {
        bouton.parentNode.removeChild(bouton)
        span.classList.add('visible')
    })

}

for (var i = 0; i < spoilers.length; i++) {
    createSpoiler(spoilers[i])
}



//js contact 

var form = document.getElementById('send')

form.addEventListener('submit', function() {
    alert('Message Envoyé avec succes')
})