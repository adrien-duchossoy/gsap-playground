// import gsap from 'gsap'

// gsap.to('.card', {

//     opacity: 1,
//     rotationY: 360,
//     background: '#ff6f61',
//     borderRadius: '50%',
//     scale: 1.25,
//     duration: 3, //duration and delay and ease are the only that are not CSS properties, but all the other ones are basic CSS properties
//     ease: 'power1.inOut',
//     repeat: -1,
//     yoyo: true,
//     repeatDelay: 2,
//     paused: true //pause all the animations
// })

import gsap from 'gsap'

const play = document.querySelector("#play-btn")
const pause = document.querySelector("#pause-btn")
const resume = document.querySelector("#resume-btn")
const restart = document.querySelector("#restart-btn")
const reverse = document.querySelector("#reverse-btn")
const kill = document.querySelector("#kill-btn")
const yoyo = document.querySelector("#yoyo-btn")


const animation = gsap.to('.card', {
    opacity: 1,
    rotation: 360,
    borderRadius: '50%',
    duration: 5,
})

play.addEventListener("click", () => {
    animation.play()
})

pause.addEventListener("click", () => {
    animation.pause()
})

resume.addEventListener("click", () => {
    animation.resume()
})

restart.addEventListener("click", () => {
    animation.restart()
})

reverse.addEventListener("click", () => {
    animation.reverse()
})

kill.addEventListener("click", () => {
    animation.kill()
})

yoyo.addEventListener("click", () => {
    animation.yoyo(true)
})

repeat.addEventListener("click", () => {
    animation.repeat(2)
})