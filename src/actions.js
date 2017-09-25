import C from './constants'
import { v4 } from 'uuid'

export const tick = () =>
  ({
      type: C.TICK_COUNTDOWN
  })

export const clickedDraftButton = (resetTime,managers,draftLocation) =>
  ({
      type: C.DRAFTED_TEAM,
      resetTime,
      managers,
      draftLocation
  })

export const addManager = (name, draftPick) =>
  ({
      type: C.ADD_MANAGER,
      id: v4(),
      name,
      draftPick
  })

