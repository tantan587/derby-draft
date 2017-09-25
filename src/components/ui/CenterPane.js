import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'




const CenterPane = ({managers=[],draftLocation={}}) =>
{
  var a = 1
  return(
    (managers.length > 0) ?
    <div className="center-pane">Round: {draftLocation.round} Pick: {draftLocation.pick} Up Next is: {managers[draftLocation.pick-1].name}</div> :
    <div className="center-pane">no managers yet</div>
    )
}
  

export default CenterPane