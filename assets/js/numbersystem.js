//Timer Updation
const start_time = 0;
let time = start_time*60;

const timer_p = document.getElementById("timer");
function updatetimer(){
    let minutes = Math.floor(time/60);
    let seconds = time %60;
    seconds = seconds < 10 ?'0'+ seconds : seconds;
    minutes = minutes < 10 ?'0'+ minutes : minutes;
    timer_p.innerHTML =`${minutes} : ${seconds}`;

    time++;
}

intervalhandler = setInterval(updatetimer,1000);

const submit_btn = document.getElementById("submit-btn");
const next_btn = document.getElementById("next-btn");
const question_p = document.getElementById("question");
const choices_div = document.getElementById("choices"); 
const msg_div = document.getElementById("message");

//Score 

let questionIndex= 0;
let score = 0;
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
var questions = [
    new Question("When a number is subtracted from the number 8,12 and 20 the remainders are in continued proportion Find the number ?", ["2", "4","6", "8"], "4"),
    new Question("The sum of the digits of a 2-digit number is 11. If we add 45 to the number the new number obtained is a number formed by interchange of the digits. What is the number?", ["x=3 and y=8","x=5 and y=8","x=8 and y=3","x=4 and y=8"], "x=3 and y=8"),
    new Question("Among three numbers, the first is twice the second and thrice the third if the average of three numbers is 517 then what is the difference between the first and the third number?", ["764","364","564","664"],"564")
];

function isCorrectAnswer(choices,i){
    return questions[i].answer === choices;
}


function guess(id,choices,i){
    let btn = document.getElementById(id);
    btn.onclick = function(){
        let value = isCorrectAnswer(choices,i);
        if(value){
            score++;
            
            btn.classList.add('btn-correct');
            setTimeout(function(){
                btn.classList.remove("btn-correct");
            },700);
            msg_div.classList.remove("hide");
            msg_div.classList.add("result");
            msg_div.innerHTML = 'Correct Answer!!!';
        }
        else{
            btn.classList.add("btn-wrong");
            setTimeout(function(){
                btn.classList.remove("btn-wrong");
            },700);
            msg_div.classList.remove("hide");
            msg_div.classList.add("result");
            msg_div.innerHTML = 'OOPS!! Wrong Answer<br>Correct Answer is '+questions[i].answer;
        }
    }
}
function showQuestion(i){
    let q = questions[i];
    question_p.innerHTML = `${questionIndex+1})` + " "+ q.text;
}


function showChoices(i){
    let c = questions[i].choices;
    choices_div.classList.add("btn-grid")
    for(let j=0;j<c.length;j++){
        let btn = document.getElementById("btn"+j);
        btn.innerHTML = c[j];
        guess("btn"+j,c[j],i);
    }
}

next_btn.addEventListener('click',function(){
    questionIndex++;
    if(questionIndex === questions.length-1){
        submit_btn.classList.remove("hide");
        next_btn.classList.add("hide");
    }
    msg_div.classList.add("hide");
    showQuestion(questionIndex);
    showChoices(questionIndex);
})

submit_btn.addEventListener('click',function(){
    question_p.style.fontSize= "30px";
    question_p.style.fontWeight= "700";
    question_p.innerHTML = 'Your Score : ' + score + '<br>Total Questions : '+questions.length ;
    choices_div.classList.add("hide");
    msg_div.classList.add("hide");
    submit_btn.classList.add("hide");
    next_btn.classList.add("hide");
    clearInterval(intervalhandler);
    document.getElementById("time-txt").innerHTML = "Time Taken : ";
})

showQuestion(questionIndex);
showChoices(questionIndex);
