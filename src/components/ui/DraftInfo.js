import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/DraftInfo.css'
import DraftInfoRow from './DraftInfoRow'

const teamOptions = {
    all: "All",
    drafted: "Drafted",
    avaliable: "Avaliable"
}

const options = {
    roster: "ROSTER",
    teams: "TEAMS",
    draftResults: "DRAFT RESULTS"
}

const DraftInfo = ({draftTabs={},managers=[],teams={}, totalRounds=1, onSelect=f=>f, onSubSelect=f=>f, onTeamSelect=f=>f}) =>
{
    var subTabs = []
    var headers = []
    var content = []

    switch (draftTabs.mainTab){
    case options.roster : 
      managers.map(manager => subTabs.push({id: manager.id, displayName: manager.name}))
      //move this to data??
      headers = ['Team', 'League', 'Record Last Year', 'Total Points Last Year', 'Projected']
      content = teams.filter(team => team.draftedBy === managers[draftTabs.subTabNum].id);

      break;
    case options.teams :
       Object.keys(teamOptions).map((item, i) => subTabs.push({id: i,displayName: teamOptions[item]}))
        headers = ['Team', 'League', 'Record Last Year', 'Total Points Last Year', 'Projected']

        switch(draftTabs.subTabNum)
        {
           case 0 : //All
              content = teams;
           break;
           case 1 : //Drafted
              content = teams.filter(team => team.draftedBy !== "");
           break;
           case 2 : //Avaliable
              content = teams.filter(team => team.draftedBy === "");
           break;
        }
       break;
    case options.draftResults :
       Array.from(Array(totalRounds).keys()).map(i => subTabs.push({id: i ,displayName: "Round " + (i+1).toString()}))
       headers = ['Draft Pick', 'Person', 'Team', 'League']
       break;


  }
    const divStyle = {
      width: (100/subTabs.length).toString() + "%",
      };

      const divStyle2 = {
      '--colNum': headers.length,
      '--rowW' : (100/headers.length).toString() + "%",
      };

    return (
      <div>
        <nav className="draft-info-cat">
          {Object.keys(options).map((item, i) =>
              <div key={i}
                 className={(draftTabs.mainTab === options[item]) ? "draft-info-cat-selected" : "draft-info-cat"}
                 onClick={e => {
                     e.preventDefault()
                     onSelect(options[item])
                 }}>{options[item]}</div>
          )}
        </nav>
        <nav className="draft-info-cat">
          {subTabs.map((tab,i) =>
              <div key={tab.id} className={(i=== draftTabs.subTabNum) ? "folder-selected": "folder"}style={divStyle}
                 onClick={e => {
                     e.preventDefault()
                     onSubSelect(i)
                 }}>{tab.displayName}</div>
          )}
        </nav>
        <div>
          <div className="wrapper-header" style={divStyle2}>
            {headers.map((header,i) =>
              <div key={i} className="grid-item-header">{header}</div>
            )}
            </div>
            <div className="wrapper-large">
             {(content.length > 0) ? 
              content.map((team,i) => 
                <DraftInfoRow key={i} team={team} even={(i % 2 === 0)} type={draftTabs.mainTab} subTabNum={draftTabs.subTabNum} onTeamSelect={(teamId) => onTeamSelect(teamId)}/>) 
              : <div></div>}
          </div>
        </div>
      </div>

      )

}
  

export default DraftInfo