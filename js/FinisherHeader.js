new FinisherHeader({
  count: 80,
  size: {
    min: 1,
    max: 20,
    pulse: .02,
  },
  speed: {
    x: {
      min: 0,
      max: 0.4,
    },
    y: {
      min: 0,
      max: 0.4,
    },
  },
  colors: {
    background: "#f1f1f1",
    particles: ["#929292", "#000000", "#3a3942", "#6d6d6d", "#b5b5b5"],
  },
  blending: "screen",
  opacity: {
    center: 0,
    edge: 0.3,
  },
  skew: 9,
  shapes: ["s", "t", "c"],
});
