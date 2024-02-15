gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 4, //?full amount of time in seconds
    each: 0.5, //?amount of time of each element in the array
    from: 0, //? on which element start the animation
  },
});
