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





//$('svg').animate({
//     height: '200px',
// }, 3000);
//
//
//
// gsap.fromTo('svg', {
//     opacity: 1
// }, {
//     opacity:0,
//     duration:3,
//     delay:3,
//
//
// });
//
// gsap.fromTo('.loading', {
//     opacity: 1
// }, {
//     opacity:0,
//     duration:3,
//     delay:4,
//
//
// });

//animate//

var tl = new  TimelineMax();


tl.add(TweenMax.from(".Head", {

        opacity: 0,
        y: 40,
//        ease: Expo.easeInOut
    }

));

tl.add(TweenMax.from(".topic",   {
       opacity: 0,
       y: 40,
    }

),  );
tl.add(TweenMax.from(".card-stress",  {
       opacity: 0,
       x: -40,
    }

),  );
tl.add(TweenMax.from(".card-anxiety",  {
       opacity: 0,
       y: 40,
    }

),  );
tl.add(TweenMax.from(".card-depression",  {
       opacity: 0,
       x: 40,
    }

),  );




