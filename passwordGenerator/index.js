const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.querySelector("#password1")
let passwordEl2 = document.querySelector("#password2")
let passwordEl = document.querySelector("#password-el")


function randomIndex1() {
    let randomNumber1 = Math.floor( Math.random() * characters.length )
    return characters[randomNumber1]
}

passwordEl.addEventListener("click", generator1)
passwordEl.addEventListener("click", generator2)

function generator1() {
    let finalPass = ""
    for(let i = 1; i < 11; i++){
        let char = randomIndex1()
        finalPass += char
    }
    passwordEl1.textContent = finalPass
}

function generator2() {
    let finalPass = ""
    for(let i = 1; i < 11; i++){
        let char = randomIndex1()
        finalPass += char
    }
    passwordEl2.textContent = finalPass
}

function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }

    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#copy-text-btn1').onclick = function() {
    copyText(document.querySelector("#password1"));
}

document.querySelector('#copy-text-btn2').onclick = function() {
    copyText(document.querySelector("#password2"));
}