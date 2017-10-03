import { connect } from 'react-redux'
import Menu from './ui/Menu'
import LeftPane from './ui/LeftPane'
import CenterPane from './ui/CenterPane'
import RightPane from './ui/RightPane'
import Queue from './ui/Queue'
import Countdown from './ui/Countdown'
import DraftButton from './ui/DraftButton'
import AddNewManager from './ui/AddNewManager'
import DraftOrder from './ui/DraftOrder'
import DraftInfo from './ui/DraftInfo'
import { tick, clickedDraftButton, addManager, resetDraft, toggleMainTab, toggleSubTabNum, addTeamToQueue, removeTeamFromQueue} from '../actions'
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
            managers: [...state.managers],//.sort()
            draftLocation: state.draftLocation,
            draftOrder : state.draftOrder
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
            },
            onResetDraft(){
                dispatch(resetDraft())
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
            }
        })
)(Countdown)

export const DraftButtonBox= connect(
    state =>
        ({
            resetTime : state.resetTime,
            managersLength: state.managers.length,
            managers : state.managers,
            queue : state.queue,
            draftLocation : state.draftLocation,
            draftOrder : state.draftOrder
        }),
    dispatch =>
        ({
            onDraft(resetTime, managersLength,managerId,teamId) {
                dispatch(clickedDraftButton(resetTime,managersLength,managerId,teamId))
            }
        })
)(DraftButton)

export const CenterPane1 = connect(
    state =>
        ({
            managers: state.managers,
            draftLocation : state.draftLocation,
            draftOrder : state.draftOrder

        }),
    dispatch =>
        ({
            
        })
)(CenterPane)

export const DraftInfoBox = connect(
    state =>
        ({
            managers: state.managers,
            teams: state.teams,
            draftTabs : state.draftTabs,
            totalRounds : state.draftLocation.totalRounds
        }),
    dispatch =>
        ({
            onSelect(mainTabDisplay) {
                dispatch(toggleMainTab(mainTabDisplay))
            },
            onSubSelect(subTabNumDisplay) {
                dispatch(toggleSubTabNum(subTabNumDisplay))
            },
            onTeamSelect(teamId) {
                dispatch(addTeamToQueue(teamId))
            },
        })
)(DraftInfo)

export const RightPane1 = connect(
    state =>
        ({
        }),
    dispatch =>
        ({})
)(RightPane)

export const QueueBox = connect(
    state =>
        ({
            teams : state.teams,
            queue : state.queue
        }),
    dispatch =>
        ({
            onRemove(teamId) {
                dispatch(removeTeamFromQueue(teamId))
            }
        })
)(Queue)





