import { connect } from 'react-redux'
import Menu from './ui/Menu'
import LeftPane from './ui/LeftPane'
import CenterPane from './ui/CenterPane'
import RightPane from './ui/RightPane'
import Countdown from './ui/Countdown'
import DraftButton from './ui/DraftButton'
import AddNewManager from './ui/AddNewManager'
import DraftOrder from './ui/DraftOrder'
import { tick, resetTimer, addManager, updateDraftInfo} from '../actions'
/*import { sortFunction } from '../lib/array-helpers'*/

export const Menu1 = connect(
    state =>
        ({}),
    dispatch =>
        ({})
)(Menu)

export const LeftPane1 = connect(
    state =>
        ({
            managers: [...state.managers]//.sort()
        }),
    dispatch =>
        ({

        })
)(DraftOrder)

export const AddNewManagerBox = connect(
    null,
    dispatch =>
        ({
            onNewManager(name) {
                dispatch(addManager(name))
            }
        })
    )(AddNewManager)

export const CountdownBox= connect(
    state =>
        ({
            countdownTime : state.countdownTime,
            isOn : state.isOn
        }),
    dispatch =>
        ({
            onTick() {
                dispatch(tick())
            }/*,
            onResetTimer(resetTime) {
                dispatch(resetTimer(resetTime))
            }*/
        })
)(Countdown)

export const DraftButtonBox= connect(
    state =>
        ({
            resetTime : state.resetTime
        }),
    dispatch =>
        ({
            onDraft(resetTime) {
                dispatch(resetTimer(resetTime))
            }
        })
)(DraftButton)

export const CenterPane1 = connect(
    state =>
        ({
            managers: state.managers,
            draftLocation : state.draftLocation

        }),
    dispatch =>
        ({
            onDraft(managers,draftLocation) {
                dispatch(updateDraftInfo(managers,draftLocation))
            }
        })
)(CenterPane)

export const RightPane1 = connect(
    state =>
        ({}),
    dispatch =>
        ({})
)(RightPane)





