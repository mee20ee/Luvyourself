const FinalScore = document.getElementById("FinalScore");
const mostrecentScore = localStorage.getItem("mostrecentScore");

const Level = document.getElementById("Level");
const recommend = document.getElementById("recommend");

FinalScore.innerText = mostrecentScore;

//Menu Bar

$("#wrapper").click(function () {
    $(".menu").toggleClass("close");
    $(".navbar").toggleClass("change-bar");



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

//////animate intro/////
var tl = new TimelineMax();



tl.add(TweenMax.from(".yellow", 2, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }

));
tl.add(TweenMax.from(".pink", 1, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }

));
TweenMax.from(".blue", 2, {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
    }

);

tl.add(TweenMax.from(".right", 1, {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
    }

), "0");

//result characters//////

if (mostrecentScore <= 4) {
    $('.yellow').css({
        "display": "block"
    });
} else if (mostrecentScore >= 5 && mostrecentScore <= 9) {
    $('.pink').css({
        "display": "block"
    });

} else if (mostrecentScore >= 10 && mostrecentScore <= 14) {
    $('.blue').css({
        "display": "block"
    });
} else if (mostrecentScore >= 15 && mostrecentScore <= 19) {
    $('.red').css({
        "display": "block"
    });
} else if (mostrecentScore >= 20 && mostrecentScore <= 27) {
    $('.red').css({
        "display": "block"
    });
}







if (mostrecentScore <= 4)
    Level.innerHTML = " ไม่มีภาวะซึมเศร้า ";
if (mostrecentScore >= 5 && mostrecentScore <= 9)
    Level.innerHTML = " เล็กน้อย";
else if (mostrecentScore >= 10 && mostrecentScore <= 14)
    Level.innerHTML = " ปานกลาง";
else if (mostrecentScore >= 15 && mostrecentScore <= 19)
    Level.innerHTML = " ค่อนข้างรุนแรง";
else if (mostrecentScore >= 15 && mostrecentScore <= 19)
    Level.innerHTML = " รุนแรง";


//recommend///
if (mostrecentScore <= 4)
    recommend.innerHTML = "ขณะนี้ยังไม่พบภาวะซึมเศร้าที่ชัดเจน";
else if (mostrecentScore >= 5 && mostrecentScore <= 9)
    recommendcommend.innerHTML = "ควรหากิจกรรมที่ช่วยผ่อนคลายอารมณ์หรือปรึกษาบุคคลใกล้ชิดที่ไว้ใจ";
else if (mostrecentScore >= 10 && mostrecentScore <= 14)
    recommend.innerHTML = "มีภาวะซึมเศร้าปานกลาง ควรปรึกษาแพทย์ เพื่อวินิจฉัยและบำบัดรักษา";
else if (mostrecentScore >= 15 && mostrecentScore <= 19)
    recommend.innerHTML = "มีภาวะซึมเศร้าค่อนข้างรุนแรง ควรปรึกษาแพทย์เพื่อวินิจฉัยและบำรักษา";
else if (mostrecentScore >= 20 && mostrecentScore <= 27)
    recommend.innerHTML = "มีภาวะซึมเศร้ารุนแรง ควรปรึกษาแพทย์เพื่อวินิจฉัยและบำบัดรักษา";




//cursor

//$(document).mousemove(function(e){
//    $(".cursor").eq(0).css({left: e.clientX, top: e.clientY});
//});
