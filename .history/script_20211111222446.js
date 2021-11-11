let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

let timeline2 = new TimelineMax();

// timeline.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });
// .to(".content-images", 2, { opacity: 0 }, "-=2");
timeline
  .to(".rock1", 3, { y: -300 })
  .to(".girl1", 3, { y: -250 }, "-=3")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3");
// .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 0.5 })
// .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 0.5 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

timeline2
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 5 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 5 });

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".content-images",
})
  .setTween(timeline2)

  .addTo(controller);
