import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'




const Queue = ({teams=[], queue=[], onRemove=f=>f}) =>
  {return (
        <div className="draft-order">
         <p>Queue:</p>
        {(teams.length === 0) ?
            <p>Nothing on the Queue.</p> :
            queue.map((teamId, i) => 
             <QueueName key={teamId} teams={teams} teamId={teamId} onRemove={() => onRemove(teamId)}/>
           
        )}
        </div>
    )
}

export default Queue

const QueueName = ({teams=[], teamId="", onRemove}) =>
{
return(
  <div className="draft-order-name" >
    <button onClick={onRemove}>X</button>
    <span >
              Team: {teams.filter(team => team.id === teamId)[0].team}
    </span>
  </div>
            )
}