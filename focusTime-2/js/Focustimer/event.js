import { controls, controlsSounds } from "./elements.js";
import * as actions from './actions.js'

export function selectControls(){
  controls.addEventListener('click', (e)=>{
    const action = e.target.dataset.action
    if(typeof actions[action] != 'function'){
      return
    }
    
    actions[action]()

  })
  
}

export function selectSound(){
  controlsSounds.addEventListener('click', (e)=>{
    const action = e.target.dataset.action
    if(typeof actions[action] != 'function'){
      return
    }
    
    actions[action]()

  })
  
}