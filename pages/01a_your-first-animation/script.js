gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to('.card', {
      
      scale: 0.5,
      repeat: -1, //repeat indefinitely
      yoyo: true,
      duration: 0.5,
    })
  }
})