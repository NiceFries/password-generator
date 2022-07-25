const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.querySelector("#password-area1")
let passwordEl2 = document.querySelector("#password-area2")
let passwordBtn = document.querySelector("#password-btn")

passwordBtn.addEventListener("click", function() {
    let pass1 = ""
    let pass2 = ""
    for (let i = 0; i < 15; i++){
        let randomPassword1 = Math.floor(Math.random() * characters.length)
        let randomPassword2 = Math.floor(Math.random() * characters.length)
        pass1 += characters[randomPassword1]
        passwordEl1.textContent = pass1
        pass2 += characters[randomPassword2]
        passwordEl2.textContent = pass2
    }
})
