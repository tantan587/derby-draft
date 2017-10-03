import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const DraftButton = ({resetTime=30,managersLength=0,managers=[],queue=[],draftLocation={},draftOrder=[], onDraft=f=>f}) =>
  {
    var managerId = (draftLocation.round % 2 === 0) ?
     managers.filter(m=> m.id === draftOrder[draftLocation.pick])[0].id :
                        managers.filter(m=> m.id === draftOrder[draftOrder.length - 1 - draftLocation.pick])[0].id
    return (
        
        <nav href="#" key={1} className="draft-button" onClick={e => {
                   e.preventDefault()
                   if(queue.length>0) {onDraft(resetTime,managersLength,managerId,queue[0])}}}>DRAFT
    </nav>)
}
  

export default DraftButton