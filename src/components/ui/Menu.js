import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'
import derby from '../../images/derby.jpg'

const Menu = ({}) =>
{
  return (
  <div className="menu-bar">
    <div className="derby">
      <img src={derby} alt="" style={{width: 60, height: 60}}/>
    </div>
    <div className="menu">MENU</div>
  </div>
  
  )
}
          /*<div className="menu">
            <div  onClick={e => {
                   e.preventDefault()
                   onToggle()}}>Sort Menu
            </div>
            <div className={(open === true) ? "dropdown-content" : "dropdown-content-off"}>
            {Object.keys(options).map((item, i) =>
            <a key={i}
               href="#"
               className="dropdown-content"
               onClick={e => {
                   e.preventDefault()
                   onSelect(options[item])
               }}>{item}</a>
             )}
            </div>
          </div>
          


SortMenu.propTypes = {
    sort: PropTypes.string,
    open: PropTypes.bool,
    onSelect: PropTypes.func,
    onToggle: PropTypes.func
}*/


export default Menu