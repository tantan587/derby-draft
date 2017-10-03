import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/DraftInfo.css'

const options = {
    roster: "ROSTER",
    teams: "TEAMS",
    draftResults: "DRAFT RESULTS"
}

const teamOptions = {
    all: "All",
    drafted: "Drafted",
    avaliable: "Avaliable"
}


const DraftInfoRow = ({team={},even=true, type="ROSTER", subTabNum=0, onTeamSelect=f=>f}) =>
{
    var row = (type===options.draftResults) ? [] : [team.team, team.league, team.lastYearRecord, team.totalPoints.toString(), team.projectedPoints.toString()] 
    const divStyle2 = {
      '--colNum': row.length,
      '--rowW' : (100/row.length).toString() + "%"
      };
    
    return (
      <div className="wrapper" style={divStyle2} onClick={e => {
                     e.preventDefault()
                     if (type===options.teams && subTabNum===2)
                     {
                     onTeamSelect(team.id)
                    }
                 }}>
        {
          row.map((data, i) => <div key={i} className={(even === true) ? "grid-item-even": "grid-item-odd"}>{data}</div>)
        }
      </div>
      )

}
  

export default DraftInfoRow
