import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'




const CenterPane = ({managers=[],draftLocation={}, draftOrder=[]}) =>
{
  return(
    (managers.length > 0) ?
    <div className="center-pane">Round: {draftLocation.round + 1} Pick: 
      {draftLocation.pick + 1}. Up next is: {((draftLocation.round) % 2 === 0) ? managers.filter(m=> m.id === draftOrder[draftLocation.pick])[0].name :
      managers.filter(m=> m.id === draftOrder[draftOrder.length - 1 - draftLocation.pick])[0].name}</div> :
    <div className="center-pane">no managers yet</div>
    )
}
  

export default CenterPane