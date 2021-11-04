let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline.to(".text", 5, { y: 50 }).to(".content-images", 2, { opacity: 0 });
