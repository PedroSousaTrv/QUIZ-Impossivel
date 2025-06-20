//DADOS INICIAIS

let currentQuestion = 0;
let acertos = 0;

//FUNÇÕES
function start(){
    showQuestion()
}

function showQuestion(){
    if(questions[currentQuestion]){
        let q =questions[currentQuestion];

        document.querySelector(".startPack").style.display = "none"
        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block";

        document.querySelector(".question").innerHTML = q.question;
        
        
        let optionsHtml = ''
        for(let i in q.options){
            
            optionsHtml += `<div data-op="${i}" class="option"><span>0${+i+1}</span>${q.options[i]}</div>`
        }
        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach( item => {
            item.addEventListener("click", optionClick);
        })
    } else {
        quizResult();
    }

    growBar();
}

function optionClick(e){

    let selectedOption = e.target.getAttribute("data-op");

    if(questions[currentQuestion].answer == selectedOption){
        acertos++;
        console.log(acertos);
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    } else{
        showResults();
    }
    growBar();
};

function growBar(){

    let pctProg = Math.round((currentQuestion / questions.length) * 100);
    document.querySelector(".progress--bar").style.width = `${pctProg}%`

}
function showResults(){
    document.querySelector(".questionArea").style.display = "none";
    document.querySelector(".scoreArea").style.display = "block";
    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${acertos}`

    pctAcerto = acertos / questions.length * 100
    document.querySelector(".scorePct").innerHTML = `Acertou ${pctAcerto}%`
    resultsVerify();

}

function resultsVerify(){
    if(acertos <= 4){
        document.querySelector(".scoreText1").innerHTML = "Que vergonha, MELHORE!!"
        document.querySelector(".scorePct").style.color = "red"
    } else if (acertos < 7){
        document.querySelector(".scoreText1").innerHTML = "Acredito que Você Pode Melhorar!"
        document.querySelector(".scorePct").style.color = "yellow"
    } else if (acertos >= 7){
        document.querySelector(".scoreText1").innerHTML = "Parabéns MEU Campeão!!"
        document.querySelector(".scorePct").style.color = "green"
    }
}

function restart(){
    currentQuestion = 0;
    acertos = 0;
    showQuestion();
}

console.log(acertos)


