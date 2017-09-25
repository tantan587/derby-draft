import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const DraftButton = ({resetTime=30,managers=[],draftLocation={}, onDraft=f=>f}) =>
  {
    return (<div className="timer" onClick={e => {
                   e.preventDefault()
                   onDraft(resetTime,managers,draftLocation)}}>DRAFT
    </div>)
}
  

export default DraftButton