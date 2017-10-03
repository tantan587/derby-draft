import C from './constants'
import { v4 } from 'uuid'

export const tick = () =>
  ({
      type: C.TICK_COUNTDOWN
  })

export const clickedDraftButton = (resetTime,managersLength,managerId, teamId) =>
  ({
      type: C.DRAFTED_TEAM,
      resetTime,
      managersLength,
      managerId,
      teamId
  })

export const addManager = (name) =>
  ({
      type: C.ADD_MANAGER,
      id: v4(),
      name
  })

  export const resetDraft = () =>
  ({
      type: C.RESET_DRAFT
  })

  export const toggleMainTab = mainTabDisplay =>
  ({
    type: C.TOGGLE_DRAFT_DISPLAY,
    mainTabDisplay
  })

  export const toggleSubTabNum = subTabNumDisplay =>
  ({
    type: C.TOGGLE_SUB_TAB_NUM,
    subTabNumDisplay
  })

  export const addTeamToQueue = teamId =>
  ({
    type: C.ADD_TEAM_TO_QUEUE,
    teamId
  })

    export const removeTeamFromQueue = teamId =>
  ({
    type: C.REMOVE_TEAM_FROM_QUEUE,
    teamId
  })
