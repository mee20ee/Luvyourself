 $("#wrapper").click(function () {
     $(".menu").toggleClass("close");
     $(".navbar").toggleClass("change-bar");
 });


 //animate heading

 ///walk///
 var tl = new TimelineMax();
 tl.add(TweenMax.from("h1", 2, {
     opacity: 0,
     y: 50,

 }));

 tl.add(TweenMax.from("p", 3, {
     opacity: 0,
     y: 30,


 }), "0");






 //animate on scroll
 gsap.registerPlugin(ScrollTrigger)
 let t = gsap.timeline()

 gsap.to(".topic", {
     opacity: 0,
     y: "-80px",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_walk",
         //         markers: true,


         //event: onEnter onLeave onEnterBack onLeaveBack
         toggleActions: "restart none none reset"
         //event: play, pause , resume , reset , restart ,complete , reverse , none
     },


 });

 //walk///

 gsap.from(".text_walk", {
     duration: 1,
     opacity: 0,
     x: "-50px",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_walk",

         //         markers: true,


         //event: onEnter onLeave onEnterBack onLeaveBack
         toggleActions: "restart none none reset"
         //event: play, pause , resume , reset , restart ,complete , reverse , none
     },


 })
 gsap.from("#img_walk", {
     duration: 2,
     opacity: 0,
     x: "-50px",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_walk",
         //         markers: true,


         //event: onEnter onLeave onEnterBack onLeaveBack
         toggleActions: "restart none none reset"
         //event: play, pause , resume , reset , restart ,complete , reverse , none
     },


 });

 ////plant////
 gsap.from(".text_plant", {
     duration: 2,
     opacity: 0,
     x: "-50vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_plant",

         scrub: true,
         //         markers: true,
         start: "top 50%",
         end: "bottom 90%",

     },


 })
 gsap.from("#img_plant", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_plant",
         scrub: 1,
//         markers: true,
         start: "top 90%",
         end: "bottom 60%",
     },


 })

 /////NoPhone/////
 gsap.from(".text_Nophone", {
     duration: 2,
     opacity: 0,
     x: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_Nophone",
         scrub: 1,
//         markers: true,
         start: "top 50%",
         end: "bottom 90%",

     },


 })
 gsap.from("#img_Nophone", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_Nophone",
         scrub: 1,
//         markers: true,
         start: "top 80%",
         end: "bottom 90%",

     },


 })


 /////yoka/////
 gsap.from(".text_yoka", {
     duration: 2,
     opacity: 0,
     x: "10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_yoka",
         scrub: 1,
//         markers: true,
         start: "top 70%",
         end: "bottom 60%",

     },


 })
 gsap.from("#img_yoka", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_yoka",
         scrub: 1,
//         markers: true,
         start: "top 70%",
         end: "bottom 60%",

     },


 })
 /////diary/////
 gsap.from(".text_diary", {
     duration: 2,
     opacity: 0,
     x: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_diary",
         scrub: 1,
//         markers: true,
         start: "top 80%",
         end: "bottom 100%",

     },


 })
 gsap.from("#img_diary", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_diary",
         scrub: 1,
//         markers: true,
         start: "top 100%",
         end: "bottom 90%",

     },


 })

 /////vegetable/////
 gsap.from(".text_vegetable", {
     duration: 2,
     opacity: 0,
     x: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_vegetable",
         scrub: 1,
//         markers: true,
         start: "top 60%",
         end: "bottom 100%",

     },


 })
 gsap.from("#img_vegetable", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_vegetable",
         scrub: 1,
//         markers: true,
         start: "top 80%",
         end: "bottom 60%",

     },


 })

 /////vegetable/////
 gsap.from(".text_sleep", {
     duration: 2,
     opacity: 0,
     x: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: ".text_sleep",
         scrub: 1,
//         markers: true,
         start: "top 60%",
         end: "bottom 100%",

     },


 })
 gsap.from("#img_sleep", {
     duration: 1,
     opacity: 0,
     y: "-10vw",
     ease: "linear",
     scrollTrigger: {
         trigger: "#img_sleep",
         scrub: 1,
//         markers: true,
          start: "top 80%",
         end: "bottom 90%",


     },


 })


 //Scrolling animation////

 ScrollTrigger.create({

     trigger: '.topic',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FFD4D4'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#ffffff'
         })
     },


 })

 ScrollTrigger.create({

     trigger: '.walk',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FFFFE8'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#E5E0FF'
         })
     },


 })
 ScrollTrigger.create({

     trigger: '.plant',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FAD3E7'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FBF1D3'
         })
     },


 })

 ScrollTrigger.create({

     trigger: '.Nophone',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FAECD6'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FFE5F1'
         })
     },


 })
 ScrollTrigger.create({

     trigger: '.yoka',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#F5FFCB'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FBFACD'
         })
     },


 })

 ScrollTrigger.create({

     trigger: '.diary',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FDE2E2'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FFE3E1'
         })
     },


 })
 ScrollTrigger.create({

     trigger: '.vegetable',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#D9D7F1'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#FFEFEF'
         })
     },


 })

 ScrollTrigger.create({

     trigger: '.sleep',
//     markers: true,
     start: "top 50%",
     end: "bottom 0%",

     onEnter: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#F7DBF0'
         })
     },

     onLeaveBack: () => {
         gsap.to('body', {
             duration: 1.0,
             backgroundColor: '#DBC6EB'
         })
     },


 })







 ////Background Color Change///
 // gsap.registerPlugin(ScrollTrigger);
 //
 // const locoScroll = new LocomotiveScroll({
 //     el: document.querySelector(".container"),
 //     smooth: true
 // });
 //
 // ScrollTrigger.scrollerProxy(".container", {
 //     scrollTop(value) {
 //         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
 //     },
 //     getBoundingClientRect() {
 //         return {
 //             top: 0,
 //             left: 0,
 //             width: window.innerWidth,
 //             height: window.innerHeight
 //         };
 //     },
 //     pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
 // });
 //
 // gsap.to("body", {
 //     "--color": "#FFFFE8",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".topic",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 //
 // gsap.to("body", {
 //     "--color": "#FFFAD7",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".walk",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 //
 // gsap.to("body", {
 //     "--color": "#FFF2F2",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".plant",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 // gsap.to("body", {
 //     "--color": "#E8F3D6",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".Nophone",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 // gsap.to("body", {
 //     "--color": "#FEFCF3",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".yoka",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 // gsap.to("body", {
 //     "--color": "#EFF5F5",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".diary",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 // gsap.to("body", {
 //     "--color": "#EFF5F5",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".vegetable",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 // gsap.to("body", {
 //     "--color": "#EFF5F5",
 //     immediateRender: false,
 //     scrollTrigger: {
 //         trigger: ".sleep",
 //         scroller: ".container",
 //         scrub: true,
 //         start: 'top bottom',
 //         end: '+=100%'
 //     }
 // });
 //
 //
 //
 //
 // locoScroll.on("scroll", ScrollTrigger.update);
 // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 //
 // ScrollTrigger.refresh();
