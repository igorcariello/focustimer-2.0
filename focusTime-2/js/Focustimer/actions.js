import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()


}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

}

export function plusMinutes(){
  let minutes = Number(el.minutes.textContent) + 5
  let seconds = el.seconds.textContent
  timer.updateDisplay(minutes, seconds)

} 


export function minusMinutes(){
  let minutes = Number(el.minutes.textContent) - 5
  let seconds = el.seconds.textContent

  if (minutes<0){
    return
  }

  timer.updateDisplay(minutes, seconds)
}

export function forestSound(){
  sounds.audioCoffeShop.pause()
  sounds.audioFireplace.pause()
  sounds.audioRain.pause()
  sounds.audioForest.play() 
}

export function fireplaceSound(){
  sounds.audioCoffeShop.pause()
  sounds.audioFireplace.play()
  sounds.audioRain.pause()
  sounds.audioForest.pause()  
 }

 export function rainSound(){
  sounds.audioCoffeShop.pause()
  sounds.audioFireplace.pause()
  sounds.audioRain.play()
  sounds.audioForest.pause() 
 }

 export function coffeShopSound(){
  sounds.audioCoffeShop.play()
  sounds.audioFireplace.pause()
  sounds.audioRain.pause()
  sounds.audioForest.pause()  
 }