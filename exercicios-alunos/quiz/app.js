let billionaires = document.querySelectorAll('img')
let question = document.querySelector( '.question' )
let quiz = document.querySelector( '.quiz' )
let alternatives = document.querySelectorAll( 'li' )
let result = document.querySelector( '.result' )
let answer = document.querySelector( '.answer' )

function checkBillionaire(event) {

    let billionaires = event.target

    if (billionaires.classList.contains('Musk')) {
        question.style.display = 'initial'
        document.getElementById('person').innerHTML = "Elon Musk";
        document.getElementById('money').innerHTML = "US$ 219 bilhões";
        document.getElementById('company').innerHTML = "Tesla";
        document.getElementById('person1').innerHTML = "Elon Musk";
        document.getElementById('first-alternative').innerHTML = "180 anos";
        document.getElementById('second-alternative').innerHTML = "2500 anos";
        document.getElementById('third-alternative').innerHTML = "6900 anos";
        document.getElementById('fourth-alternative').innerHTML = "7400 anos";
    }   else if (billionaires.classList.contains('Bezos')) {
        question.style.display = 'initial' 
        document.getElementById('person').innerHTML = "Jeff Bezos";
        document.getElementById('money').innerHTML = "US$ 171 bilhões";
        document.getElementById('company').innerHTML = "Amazon";
        document.getElementById('person1').innerHTML = "Jeff Bezos";
        document.getElementById('first-alternative').innerHTML = "160 anos";
        document.getElementById('second-alternative').innerHTML = "3200 anos";
        document.getElementById('third-alternative').innerHTML = "5400 anos";
        document.getElementById('fourth-alternative').innerHTML = "6300 anos";
    }   else if(billionaires.classList.contains('Arnault')) {
        question.style.display = 'initial' 
        document.getElementById('person').innerHTML = "Bernard Arnault";
        document.getElementById('money').innerHTML = "US$ 158 bilhões";
        document.getElementById('company').innerHTML = "LVMH (Louis Vuitton)";
        document.getElementById('person1').innerHTML = "Bernard Arnault";
        document.getElementById('first-alternative').innerHTML = "130 anos";
        document.getElementById('second-alternative').innerHTML = "3100 anos";
        document.getElementById('third-alternative').innerHTML = "5000 anos";
        document.getElementById('fourth-alternative').innerHTML = "6100 anos";
}
}

for (let billionaire of billionaires){
    billionaire.addEventListener('click', checkBillionaire)
}

function checkAnswer(event) {
    let alternative = event.target
    alternative.classList.add( 'clicked' )

    if ( alternative.classList.contains( 'correct' ) ) {
        answer.style.display = 'initial' 
        result.textContent = 'Acertou!'
    
      } else {
        answer.style.display = 'initial' 
        result.textContent = 'Errou!'
      }    
}
for (let alternative of alternatives){
    alternative.addEventListener('click', checkAnswer)
}