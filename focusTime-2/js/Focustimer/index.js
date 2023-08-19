import * as events from "./event.js";
import state from "./state.js";
import * as timers from "./timer.js";



export function start (minutes,seconds) {
  state.minutes = minutes 
  state.seconds = seconds

  timers.updateDisplay()
  events.selectControls()
  events.selectSound()
}