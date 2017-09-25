import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'




const Menu = ({}) =>
  <div className="menu">Menu</div>
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