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

export const queue = (state=[], action) =>
{
  switch (action.type){
    case C.ADD_TEAM_TO_QUEUE :
     return [
      ...state,
      action.teamId
      ]
    case C.REMOVE_TEAM_FROM_QUEUE :
      return state.filter(q=> q !== action.teamId)
    case C.DRAFTED_TEAM :
       return state.filter(q=> q !== action.teamId) 
    default :
      return state
    }
}

export const teams = (state=[], action) =>
{
  switch (action.type){
    case C.DRAFTED_TEAM :
      return state.map(t => team(t,action))
    default :
      return state
    }
}

export const team = (state={}, action) =>
{
  switch (action.type){
    case C.DRAFTED_TEAM :
      return (state.id !== action.teamId) ?
        state : {
          ...state,
          draftedBy : action.managerId
        }
    default :
      return state
    }
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
      return (state.pick < action.managersLength - 1) ? 
      { round: state.round, 
        pick: state.pick + 1,
        overallPick: state.overallPick + 1,
        totalRounds : state.totalRounds } :
      { round: state.round + 1, 
        pick: 0,
        overallPick: state.overallPick + 1,
        totalRounds : state.totalRounds}
    case C.RESET_DRAFT :
       return { round: 0, 
        pick: 0,
        overallPick: 0,
        totalRounds : state.totalRounds} 
    default :
      return state
    }
}

export const draftOrder = (state = [], action) =>
{
  switch (action.type){
    case C.ADD_MANAGER : 
      return [
      ...state,
      action.id
      ]
    default :
      return state
  }
}

export const draftTabs = (state={}, action) =>
{
  switch (action.type) {
        case C.TOGGLE_DRAFT_DISPLAY:
            return {mainTab: action.mainTabDisplay, subTabNum: 0}
        case C.TOGGLE_SUB_TAB_NUM:
            return {mainTab: state.mainTab, subTabNum: action.subTabNumDisplay}
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
     case C.DRAFTED_TEAM :
      return state.map(m => manager(m,action)) 
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
    case C.DRAFTED_TEAM :
      return (state.id !== action.managerId) ?
        state : {
          ...state,
          portfolio : [...state.portfolio, action.teamId]
        }
    default :
      return state
  }
} 

