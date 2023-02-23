$("#wrapper").click(function () {
    $(".menu").toggleClass("close");
    $(".navbar").toggleClass("change-bar");
});




let start = document.querySelector(".btn");
let content = document.querySelector('.Contents');

let depressionquiz = document.querySelector(".depressionQuiz");
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");





//Get All From Quiz Section (MCQS)
let choice = document.querySelectorAll(".choice");

let ProgressFull = document.querySelector(".ProgressFull")

let index = 0;
let total_scores = 0;

const MAX_question = 9;

let level = document.querySelector("#level");

//animate start page//
var tl = new TimelineMax();



tl.add(TweenMax.fromTo("#cloud", 2, {
        y: 800
    }, {
        y: 20
    }

));

tl.add(TweenMax.fromTo("#ground1", 1, {
        y: 200
    }, {
        y: 20
    }

), "0");
tl.add(TweenMax.fromTo("#ground2", 1, {
        y: 200
    }, {
        y: 20
    }

), "0");
tl.add(TweenMax.fromTo("#ground3", 1, {
        y: 200
    }, {
        y: 20
    }

), "+.50");
tl.add(TweenMax.from(".Contents", 1, {
    opacity: 0,
    y: 30,
    //    ease: Expo.easeInOut


}), "1");



$('.btn').click(function () {
    TweenMax.to("#cloud", 2, {
            y: 500
        }

    );
});



//animate cloud///

$('.choice').click(function (event) {
    TweenMax.to("#cloud", 2, {

        y: "-=100"


    });
    return false;
});





//animate Choices//

$('.choice').click(function () {
    TweenMax.from(".question", 2, {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
    });
});
$('.choice').click(function () {
    TweenMax.from("#optionList", 2, {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
    });
});

/////circle cursor/////

const coords = {
    x: 0,
    y: 0
};
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;

});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();


//hover effect////

choice.onmousemove = function (e) {
    const x = e.pageX - choice.offsetLeft;
    const y = e.pageY - choice.offsetTop;

    choice.style.setProperty('--x', x + 'px');
    choice.style.setProperty('--y', y + 'px');
}


let loadData = () => {
    if (index < MAX_question) {
        questionNo.innerText = index + 1 + ". ";
        questionText.innerText = MCQS[index].question;
        option1.innerText = MCQS[index].choice1;
        option2.innerText = MCQS[index].choice2;
        option3.innerText = MCQS[index].choice3;
        option4.innerText = MCQS[index].choice4;
        $(".progressText").text(Number(index + 1) + " / 9");
    }





}

loadData();



start.addEventListener("click", () => {
    depressionquiz.style.display = "flex";
    content.style.display = "none";



});

$(".choice").click(function (event) {

    if (index >= MCQS.length || index >= MAX_question - 1) {
        goToResultpage();
    } else {
        index++;
        loadData();
        console.log("ques" + index);
        console.log("total: " + total_scores);
        localStorage.setItem("mostrecentScore", total_scores);
    }

    ProgessValue.style.width = `${(index/MAX_question)*118.5}%`;
});

if (index < MAX_question) {

    $("#option1").click(function () {
        total_scores += scores[index].option1;
        console.log(scores[index].option1);
        console.log(total_scores);


    });

    $("#option2").click(function () {
        total_scores += scores[index].option2;
        console.log(scores[index].option2);
        console.log(total_scores);
    });

    $("#option3").click(function () {
        total_scores += scores[index].option3;
        console.log(scores[index].option3);
        console.log(total_scores);
    });

    $("#option4").click(function () {
        total_scores += scores[index].option4;
        console.log(scores[index].option4);
        console.log(total_scores);
    });

}

function goToResultpage() {
    index = 0;
    location.href = "./result_depression.html"
}


//Progress bar Section

const ProgessValue = document.querySelector(".ProgessValue");
