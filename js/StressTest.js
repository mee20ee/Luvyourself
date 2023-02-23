let start = document.querySelector(".btn");
let content = document.querySelector('.Contents');

//question section
let stressquiz = document.querySelector(".stressQuiz")
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Choices of Questions

let option1 = document.querySelector("option1");
let option2 = document.querySelector("option2");
let option3 = document.querySelector("option3");
let option4 = document.querySelector("option4");
let option5 = document.querySelector("option5");

//correct and next button
let total_correct = document.querySelector("");
let next_question = document.querySelector("next_question");

//Get All From Quiz Section (MCQS)
let choice = document.querySelector(".chioce");

let index = 0;
let timer = 0;
let interval = 0;

let correct = 0;
let UserAns = underfined;


//Start//
//start.addEventListener("click", () => {
//    content.setAttribute("closing", "");
//    content.addEventListener("animationend", () => {
//        content.removeAttribute("content");
//        content.close();
//
//
//    },
//     { once: true}
//    );
//});








//loadData

let loadData = () => {
    questionNo.innerText = index + 1 + ".";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
    option5.innerText = MCQS[index].choice5;


}

loadData();

//when click Start button
start.addEventListener("click", () => {
    content.style.display = "none";



    //remove All active classes when continue Button Will Click
    choice.forEach(removeActive => {
        removeActive.classList.remove("active");
    })


});


choice.forEach((choice, choiceNo) => {
    choice.addEventListener("click", () => {
        choice.classList.add("active");
    })
});









//
//const Contents = document.querySelector('.Contents');
//const btn = document.querySelector('.btn');
//
//btn.addEventListener('click',() =>{
//    contents.element.remove('Contents');
//
//})



//
//var btn = document.querySelector(".ground");
//function Start(){
//    btn.classList.add('ground');
//
//}
