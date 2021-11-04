let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
  .to(".text", 2, { y: 50 })
  .to(".content-images", 2, { opacity: 0 }, "-=2");
