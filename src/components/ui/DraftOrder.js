import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const DraftOrder = ({managers=[], draftLocation={}, draftOrder=[]}) => {

    var a = managers
    return (
        <div className="draft-order">
         <p>Draft Order:</p>
        {(managers.length === 0) ?
            <p>No Managers Listed.</p> :
            getNextNamesToDisplay(managers, draftLocation, draftOrder).map(data =>
                <DraftOrderName key={data.pickNum}
                    name={data.name} overallPick={data.pickNum} />
            )
        }
        </div>
    )
}

//this might want to get abstracted to data because we might want to calculate it every time
const getNextNamesToDisplay = (managers=[], draftLocation, draftOrder, numOfNames=10)=>
{
    var rtnList = []
    var pick = 0
    var round = 0

    //only display top 10 picks or up until the end of the draft
    for(var i = draftLocation.overallPick; i < draftLocation.overallPick + numOfNames; i++)
    {
        pick = i % managers.length
        round = Math.floor(i / managers.length)

        if (round >= draftLocation.totalRounds || pick >= managers.length)
        {
            break;
        }
        (round % 2 === 0) ?
        rtnList.push({pickNum : i, name : managers.filter(m=> m.id === draftOrder[pick])[0].name }) :
        rtnList.push({pickNum : i, name : managers.filter(m=> m.id === draftOrder[draftOrder.length - 1 - pick])[0].name }) 
    }

    return rtnList
}

class DraftOrderName extends React.Component {

    render() {
        const {name, overallPick} = this.props
        return (
            <div className="draft-order-name">
              Overall Pick: {overallPick + 1}. {name}
            </div>
        )
    }

}

DraftOrderName.propTypes = {
    name: PropTypes.string.isRequired,
}




export default DraftOrder;