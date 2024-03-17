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
const ArrNames = [];
let progress_answer_true = document.getElementById("progress-answer-true");
let progress_answer_false = document.getElementById("progress-answer-false");
let reslut_answer_true = document.getElementById("reslut-answer-true");
let reslut_answer_false = document.getElementById("reslut-answer-false");
let start = document.getElementById("start");
let Res = document.getElementById("result");
let forGo = document.getElementById("forGo");
let i = 0;
let result = 0;
let progress = 10;
let TimeSetTimeOut = 3;
let trueAnsswer = 0;
let falseAnsswer = 0;

function getData(){
    if(i <= arrQuizJs.length -1){
        document.getElementById("Q").innerHTML = arrQuizJs[i].Q;
    for(let j = 0 ; j < arrQuizJs[i].R.length;j++){
    document.getElementById("Answer").innerHTML +=
    `
    <button id="R" class="R">${arrQuizJs[i].R[j]}</button>
    ` 
    }
    }else{
        if(i > arrQuizJs.length - 1){
            document.getElementById("js").style.display = "none"
            fin()
        }
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
                trueAnsswer++;
                reslut_answer_true.innerHTML = trueAnsswer + "/" + arrQuizJs.length;
                progress_answer_true.style.width = trueAnsswer * 10 + "%";
                document.getElementById("progres").style.width = progress + "%";

                document.querySelectorAll(".R").forEach((e)=>{
                    if(e.style.background != "green"){
                        e.style.display = "none";
                        this.style.display = "inline-block"
                        this.disabled = true;
                        console.log("this is treu answer" + trueAnsswer);
                    }
                })
                result += 10;
                changeCertificat();
                
            }
            else{
                falseAnsswer +=1;
                reslut_answer_false.innerHTML = falseAnsswer + "/" + arrQuizJs.length;
                progress_answer_false.style.width = falseAnsswer * 10 + "%"
                this.style.background = "red";
                document.querySelectorAll(".R").forEach((e)=>{
                    if(e.style.background != "red"){
                        e.style.display = "none";
                        this.style.display = "inline-block"
                        this.style.color = "white";
                        this.disabled = true;
                        console.log("this is false answer" + falseAnsswer);
                    }
                })
            }
        });
    });
}
function startTimer(){
    let TGame = 10;
    if(i == arrQuizJs.length){
        TGame = 0;
    }
    const time = setInterval(function(){
        Res.innerHTML = TGame--;
        if (Res.innerHTML == 0) {
            stopTimer();
            nextQuestion();
        }
    },500);
    function stopTimer() {
        clearInterval(time);
}
}
const nextQuestion = () => {
    document.getElementById("Answer").innerHTML = "";
    document.getElementById("Q").innerHTML = ""
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
            document.body.style.background = "url('/images/aa.png')";
            document.body.style.backgroundSize ="cover";
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
        start.classList.add("start");
        start.classList.remove("st");
    })
}
inDisabledStart();

function disabledStart(){
    start.disabled = true;
}
disabledStart();

function startGame(){
    start.onclick = function(){
        document.getElementById("full-name").style.display = "flex";
    }
}
startGame();

function checkName(){
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let startb = document.getElementById("startb");
    let exiteb  = document.getElementById("exiteb");
    startb.addEventListener("click", ()=>{
        let Fn = firstName.value;
        let Ln = lastName.value;
        if(Fn == "" || Ln == ""){
            alert("Please Enter your Full Name")
        }
        else{
            ArrNames.push(Fn +" "+Ln);
            document.querySelector(".wrapper-main").style.display = "none";
            document.querySelector(".wrapper-quiz").style.display = "block";
            document.getElementById("forTime").style.display = "flex";
            document.getElementById("full-name").style.display = "none";
            go();
        }
    });
    exiteb.addEventListener("click", ()=>{
        document.getElementById("full-name").style.display = "none";
    })

}
checkName();

function fin(){
    let cer_wrapper = document.querySelector(".cer-wrapper");
    let cer_name = document.getElementById("cer-name");
    let cer_score = document.getElementById("cer-score");
    let total_final = document.getElementById("total-final");

    cer_name.innerHTML = ArrNames[0];
    cer_score.innerHTML = result + "%";
    total_final.innerHTML = result + "%";
    cer_wrapper.style.display = "flex"
}

function tryAgain(){
    let again = document.getElementById("restart");
    again.onclick=function(){
        location.reload()
    }
}
tryAgain();
function changeCertificat(){
    if(result < 50){
        document.getElementById("certificat").classList.remove("certificat");
        document.getElementById("certificat").classList.add("certificatAgain");
        document.getElementById("cer-score").style.color = "red";
        document.getElementById("total-final").style.color = "red";
    }
    else{
        document.getElementById("certificat").classList.add("certificat");
        document.getElementById("certificat").classList.remove("certificatAgain");
        document.getElementById("cer-score").style.color = "green";
        document.getElementById("total-final").style.color = "green";
    }
}

