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



TweenMax.from(".yellow", 2, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }

);
TweenMax.from(".pink", 1, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
    }

);
TweenMax.from(".blue", 2, {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
    }

);

TweenMax.from(".red", 2, {
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




if (mostrecentScore <= 23) {
    $('.yellow').css({
        "display": "block"
    });
} else if (mostrecentScore >= 24 && mostrecentScore <= 41) {
    $('.pink').css({
        "display": "block"
    });

} else if (mostrecentScore >= 42 && mostrecentScore <= 61) {
    $('.blue').css({
        "display": "block"
    });
} else {
    $('.red').css({
        "display": "block"
    });
}





//help

if (mostrecentScore <= 23)
    Level.innerHTML = "น้อย";

else if (mostrecentScore >= 24 && mostrecentScore <= 41)
    Level.innerHTML = " ปานกลาง";
else if (mostrecentScore >= 42 && mostrecentScore <= 61)
    Level.innerHTML = "สูง";
else
    Level.innerHTML = "รุนแรง";



//recommend

if (mostrecentScore <= 23)
    recommend.innerHTML = "คุณมีความเครียดอยู่ในระดับน้อยและสามารถหายไปได้ในระยะเวลาสั้น ๆ เป็นความเครียดที่เกิดขึ้นได้ในชีวิตประจำวันและสามารถปรับตัวกับสถานการณ์ต่าง ๆได้อย่างเหมาะสม   ";

else if (mostrecentScore >= 24 && mostrecentScore <= 41)
    recommend.innerHTML = "คุณมีความเครียดในระดับปานกลาง ความเครียดระดับนี้ไม่ก่อให้เกิดอันตราย คุณสามารถผ่อนคลายความเครียดด้วยการทำกิจกรรมที่เพิ่มพลังหรือพูดคุยระบายความไม่สบายใจกับผู้ที่ไว้วางใจ ";
else if (mostrecentScore >= 42 && mostrecentScore <= 61)
    recommend.innerHTML = "คุณมีความเครียดในระดับสูง สิ่งที่ท่านต้องรีบทำเมื่อมีความเครียดในระดับนี้คือ คลายเครียดด้วยวิธีที่ทำได้ง่ายแต่ได้ผลดีคือ การฝึก หายใจ พูดคุยระบายความเครียดกับผู้ไว้วางใจ ";
else
    recommend.innerHTML = "คุณมีความเครียดระดับรุนแรง ความเครียดระดับนี้ ส่งผลทำให้เจ็บป่วยทางกายและสุขภาพจิต คุณควรได้รับการช่วยเหลือจากผู้ให้การปรึกษาอย่างรวดเร็ว ";


//cursor

//$(document).mousemove(function(e){
//    $(".cursor").eq(0).css({left: e.clientX, top: e.clientY});
//});
