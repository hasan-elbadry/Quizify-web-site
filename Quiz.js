const questions =['what is the capital of palestine ?','what is the largest country in the world ?','what is the largest animal in the world ?'];
const Chooses =['East Jerusalem','Gaza','Damascus','China','Russia','United Kingdom','blue whale','Elephant ','white whale'];
const answers =['East Jerusalem','Russia','blue whale'];
var checked = [];
var index = 1;

function load(){
    const questionElement = document.querySelectorAll('.question h1');
    const answer = document.querySelectorAll('.answers input');
    const displayanswer = document.querySelectorAll('.answers span');
    for(let i=0;i<questionElement.length; i++){
        questionElement[i].textContent = questions[i];
    }
    for(let i=0;i<answer.length; i++){
        answer[i].value = Chooses[i];
    }
    for(let i=0;i<displayanswer.length; i++){
        displayanswer[i].textContent = Chooses[i]
    }
}

function submit(){
    let count=0;
    var scoretitle = document.getElementById('score');
    for(let i = 0; i<=2 ; i++){
       checked[i] = document.querySelector(`.answers input[name = answer${i}]:checked`);
       if(checked[i] == null){
        checked[i] ={value : 0};
       }
       if(answers[i]==checked[i].value){
            count++
        }
    }
    scoretitle.textContent = `Your score is ${count}`;
}

function Next(){
   if(index == 3){
    index = 0;
    }
    GetSlider().style.transform = `translateX(${-43*index}vw)`;
    index++;
}
function Prev() {
    if(index == 0){
        index = 3;
    }
    index--;
    GetSlider().style.transform = `translateX(${-43*index}vw)`;
}
function GetSlider(){
    return document.getElementById('slider');
}

function playagian(){
    window.location.reload();
}