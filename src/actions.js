import C from './constants'
import { v4 } from 'uuid'

export const tick = () =>
  ({
      type: C.TICK_COUNTDOWN
  })

export const resetTimer = (resetTime) =>
  ({
      type: C.DRAFTED_PLAYER,
      resetTime
  })

export const addManager = (name, draftPick) =>
  ({
      type: C.ADD_MANAGER,
      id: v4(),
      name,
      draftPick
  })

export const updateDraftInfo = (managers, draftLocation) =>
  ({
      type: C.DRAFTED_PLAYER,
      managers,
      draftLocation
  })
