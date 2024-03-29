//from: you dont have to specify the initial state , it will figure out by itself
gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

//fromTo: you have to specify the default value, and also the new animation state
gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);
