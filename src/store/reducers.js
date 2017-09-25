import C from '../constants'

export const countdownTime = (state=0, action) =>
{
  switch (action.type){
    case C.TICK_COUNTDOWN :
      return state - 1
    case C.DRAFTED_TEAM :
      return action.resetTime
    default :
      return state
  }
}

export const resetTime = (state=5, action) =>
{
  return state
}

export const isOn = (state=true, action) =>
{
  switch (action.type){
    case C.DRAFTED_TEAM :
      return false
    case C.TICK_COUNTDOWN :
      return true
    default :
      return state
    }
}

export const draftLocation = (state= {}, action) =>
{
  switch (action.type){
    case C.DRAFTED_TEAM :
      return (action.draftLocation.pick < action.managers.length) ? 
      { round: action.draftLocation.round, 
        pick: action.draftLocation.pick + 1 } :
      { round: action.draftLocation.round + 1, 
        pick: 1 }
    default :
      return state
    }
}

export const managers = (state=[], action) =>
{
  switch (action.type)
  {
    case C.ADD_MANAGER :
      return [
      ...state,
      manager({},action)
      ]
      
     default :
      return state
  }
}

export const manager = (state={}, action) =>
{
  switch (action.type)
  {
    case C.ADD_MANAGER :
      return {
        id : action.id,
        name : action.name
     }
    default :
      return state
  }
} 

