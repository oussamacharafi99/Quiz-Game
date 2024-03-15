const arrQuizJs = [
    {
        Q: "Quel est le résultat de 2 + 2 * 2 ?",
        R: ["4", "6", "8", "10"],
        correctAnswer: "6"
    },
    {
        Q: "Quelle méthode est utilisée pour arrondir un nombre à l'entier le plus proche en JavaScript ?",
        R: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.trunc()"],
        correctAnswer: "Math.round()"
    },
    {
        Q: "Quelle méthode est utilisée pour ajouter un nouvel élément à la fin d'un tableau en JavaScript ?",
        R: ["push()", "append()", "addToEnd()", "addElement()"],
        correctAnswer: "push()"
    },
    {
        Q: "Quel est le résultat de '5' + 3 en JavaScript ?",
        R: ["53", "8", "35", "NaN"],
        correctAnswer: "53"
    },
    {
        Q: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript ?",
        R: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: "pop()"
    },
    {
        Q: "Quel opérateur est utilisé pour concaténer des chaînes de caractères en JavaScript ?",
        R: ["+", "-", "*", "&"],
        correctAnswer: "+"
    },
    {
        Q: "Quelle méthode est utilisée pour convertir une chaîne de caractères en minuscules en JavaScript ?",
        R: ["toLowerCase()", "toLower()", "lowerCase()", "makeLower()"],
        correctAnswer: "toLowerCase()"
    },
    {
        Q: "Quel est le résultat de 3 === '3' en JavaScript ?",
        R: ["true", "false", "undefined", "NaN"],
        correctAnswer: "false"
    },
    {
        Q: "Quelle méthode est utilisée pour rechercher un élément dans un tableau en JavaScript ?",
        R: ["find()", "search()", "lookup()", "indexOf()"],
        correctAnswer: "indexOf()"
    },
    {
        Q: "Quelle est la sortie de console.log(typeof []) en JavaScript ?",
        R: ["object", "array", "string", "undefined"],
        correctAnswer: "object"
    },
    // Ajoutez d'autres questions ici...
];
let start = document.getElementById("start");
let Res = document.getElementById("result");
let forGo = document.getElementById("forGo");
let i = 0;
let result = 0;
let progress = 10;
let TimeSetTimeOut = 6;

function getData(){
    document.getElementById("Q").innerHTML = arrQuizJs[i].Q;
    for(let j = 0 ; j < arrQuizJs[i].R.length;j++){
    document.getElementById("Answer").innerHTML +=
    `
    <button id="R" class="R">${arrQuizJs[i].R[j]}</button>
    ` 
    }
    checked();
}
getData();

function checked(){
    document.querySelectorAll(".R").forEach(function(element) {
        element.addEventListener("click", function() {
            if (this.innerHTML == arrQuizJs[i].correctAnswer) {
                this.style.background = "green";
                this.style.color = "white";
                progress +=10;
                document.getElementById("progres").style.width = progress + "%";

                document.querySelectorAll(".R").forEach((e)=>{
                    if(e.style.background != "green"){
                        e.style.display = "none";
                        this.style.display = "inline-block"
                        this.disabled = true;
                    }
                })
                result += 10;
                // Res.innerHTML = result;
            }
            else{
                this.style.background = "red";
                document.querySelectorAll(".R").forEach((e)=>{
                    if(e.style.background != "red"){
                        e.style.display = "none";
                        this.style.display = "inline-block"
                        this.style.color = "white";
                        this.disabled = true;
                    }
                })
            }
        });
    });
}
function startTimer(){
    let TGame = 10;
    const time = setInterval(function(){
        Res.innerHTML = TGame--;
        if (Res.innerHTML == 0) {
            stopTimer();
            nextQuestion();
        }
    },1000);
    function stopTimer() {
        clearInterval(time);
}
}
const nextQuestion = () => {
    document.getElementById("Answer").innerHTML = "";
    i++;
    getData();
    startTimer();
}

function go(){
    const goTimeF = setInterval(function(){
        forGo.innerHTML = TimeSetTimeOut--;
        if(TimeSetTimeOut == -1){
            stopGoTime();
            startTimer();
            document.getElementById("forTime").style.display = "none"
        }
    },1000)

    function stopGoTime(){
        clearInterval(goTimeF);
    }
}

/*LES FONCTIONS DE LA PAGE HOME */
function inDisabledStart(){
    document.getElementById("checkbox").addEventListener("focus", ()=>{
        start.disabled = false;
        start.classList.add("start")
    })
    
}
inDisabledStart();

function disabledStart(){
    start.disabled = true;
}
disabledStart();
function startGame(){
    start.onclick = function(){
        document.querySelector(".wrapper-main").style.display = "none";
        document.querySelector(".wrapper-quiz").style.display = "block";
        document.getElementById("forTime").style.display = "flex";
        go();
    }
}
startGame();
