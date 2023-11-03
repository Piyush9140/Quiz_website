const questions = [
    {
        question:"Which of the given cities is located on the bank of river Ganga?",
        answers:[
            {text:"Patna",correct:true},
            {text:"Gwalior",correct:false},
            {text:"Bhopal",correct:false},
            {text:"Mathura",correct:false},
         ]
    },
    { question:"What is part of a database that holds only one type of information?",
    answers:[
        {text:"Report",correct:false},
        {text:"Field",correct:true},
        {text:"Record",correct:false},
        {text:"File",correct:false},
     ]

    },
    {
        question:"'OS' computer abbreviation usually means ?",
        answers:[
            {text:"Order of Significance",correct:false},
            {text:"Open Software",correct:false},
            {text:"Optical Sensor",correct:false},
            {text:"Operating System",correct:true},
         ]
    },
    {  question:"'.MOV' extension refers usually to what kind of file?",
    answers:[
        {text:"Image file",correct:false},
        {text:"Animation/movie file",correct:true},
        {text:"Audio file",correct:false},
        {text:"MS Office document",correct:false},
     ]

    }
];
const questionElement  = document.getElementById("question");
const  answerbtn = document.getElementById("answerButtons");
const  nextbtn = document.getElementById("next-Btn");

let currentQuestionIndex=0;
let score =0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAns);
    });
}

function reset(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectAns(e){
    const selectBtn =e.target;
    const isCorrect = selectBtn.dataset.correct=="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");

    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextbtn.style.display="block";
}
function showScore(){
    reset();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML ="Play Again";
    nextbtn.style.display="block";
}
function handleNextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbtn();

    }else{
        startQuiz();
    }

});
startQuiz();



