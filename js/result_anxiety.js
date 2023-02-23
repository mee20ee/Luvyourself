const FinalScore = document.getElementById("FinalScore");
const mostrecentScore = localStorage.getItem("mostrecentScore");

const Level = document.getElementById("Level");
const commend = document.getElementById("commend");


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
if (mostrecentScore <= 9) {
    $('.yellow').css({
        "display": "block"
    });
} else if (mostrecentScore >= 10 && mostrecentScore <= 14) {
    $('.pink').css({
        "display": "block"
    });

} else if (mostrecentScore >= 15 && mostrecentScore <= 21) {
    $('.blue').css({
        "display": "block"
    });
}







if (mostrecentScore <= 9)
    Level.innerHTML = " เล็กน้อย ";
else if (mostrecentScore >= 10 && mostrecentScore <= 14)
    Level.innerHTML = "ระดับปานกลาง ";
else if (mostrecentScore >= 15 && mostrecentScore <= 21)
    Level.innerHTML = " ระดับสูง ";



//recommend///
if (mostrecentScore <= 9)
    commend.innerHTML = "คุณมีความวิตกกังวลในระดับเฉลี่ยหรือสูงกว่าเกณฑ์เฉลี่ยเพียงเล็กน้อย ";
else if (mostrecentScore >= 10 && mostrecentScore <= 14)
    commend.innerHTML = "คุณมีความวิตกกังวลในระดับปานกลางและควรทำแบบประเมินซ้้าในอีก 1-2 สัปดาห์";
else if (mostrecentScore >= 15 && mostrecentScore <= 21)
    commend.innerHTML = "คุณมีความวิตกกังวลในระดับสูง ควรได้รับการประเมิน จากผู้เชี่ยวชาญ";



//function download() {
//
//    window.open('pics/logo.png');
//
//}
//
//  $("#download").click(function (e) {
//                e.preventDefault();
//
//                window.location.href
//                    = "pics/anxiety.png";
//            });
//
//

//$(".total").click(function () {
//    if (mostrecentScore <= 9)
//        var anchorElement = document.createElement('a');
//        var fileName = 'file name';
//        var fileLink = 'pics/logo.png';
//        anchorElement.href = fileLink;
//        anchorElement.download = fileName;
//        anchorElement.target = '_blank';
//        document.body.appendChild(anchorElement);
//        console.log(anchorElement);
//        anchorElement.click();
//
//
//})



$("#download").click(function () {
    if (mostrecentScore <= 9)
        window.location = 'pics/cardAnxietyLevelYellow.jpg';
    else if (mostrecentScore >= 10 && mostrecentScore <= 14)
        window.location = 'pics/cardAnxietyLevelPink.jpg';
    else if (mostrecentScore >= 15 && mostrecentScore <= 21)
        window.location = 'pics/cardAnxietyLevelBlue.jpg';
});

//cursor

//$(document).mousemove(function(e){
//    $(".cursor").eq(0).css({left: e.clientX, top: e.clientY});
//});
