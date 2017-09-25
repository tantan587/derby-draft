import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const DraftButton = ({resetTime=30, onDraft=f=>f}) =>
  {
    return (<div className="timer" onClick={e => {
                   e.preventDefault()
                   onDraft(resetTime)}}>DRAFT
    </div>)
}
  

export default DraftButton