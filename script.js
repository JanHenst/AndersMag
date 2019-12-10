document.querySelector('.hartje').addEventListener('click', function() {
    gsap.to('.cane', {duration: 1, rotation: '+=360', transformOrigin: '60% 50%'});
});

var pet = document.getElementsByClassName('st15');

for(let i=1; i<pet.length; i++){
    pet[i].addEventListener('click', function(){
        gsap.to('.l', {duration: 1, rotation: '+=180', transformOrigin: '50% 50%'});
    });
}

let number = 1;

document.querySelector('.st4').addEventListener('click', function(){
    var letters = ['.st7','.st8','.st9','.st10','.st11','.st12','.st13']
    if(number == 1){
        number = 0
        for(let i=0; i<letters.length; i++){
            gsap.to(letters[i], {duration: 1, rotation: '180', transformOrigin: "50% 50%"});
        }
    } else {
        number = 1;
        for(let i=0; i<letters.length; i++){
            gsap.to(letters[i], {duration: 1, rotation: '0', transformOrigin: "50% 50%"});
        }
    }

});