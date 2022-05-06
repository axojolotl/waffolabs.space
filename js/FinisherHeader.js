new FinisherHeader({
  count: 40,
  size: {
    min: 1,
    max: 20,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.4,
    },
    y: {
      min: 0,
      max: 0.1,
    },
  },
  colors: {
    background: "#fff",
    particles: ["#929292", "#000000", "#3a3942", "#6d6d6d", "#b5b5b5"],
  },
  blending: "screen",
  opacity: {
    center: 0,
    edge: 0.25,
  },
  skew: -2,
  shapes: ["s", "t", "c"],
});
