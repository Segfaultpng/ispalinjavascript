var isPalinDrome = function(){

    var palin = prompt("Eneter in your string");
    palin = palin.toLocaleLowerCase();

    var characterArr = palin.split("");
    var validChars = "abcdefghijklmnopqrstuvwxyz".split("");

    var lettersArr = [];

    characterArr.forEach(function(charr){
        if(validChars.indexOf(charr) > -1){
            lettersArr.push(charr);
        }
    })

    if(lettersArr.join("") === lettersArr.reverse().join("")){
        document.getElementById("palindrometext").textContent = "TRUE";
    }else{
        document.getElementById("palindrometext").textContent = "FALSE";
    }

}

window.onload = function () {
isPalinDrome();
}