import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

class Countdown extends React.Component {
    //else
    //{
     // setTimeout(() => onResetTimer(resetTime), 2000)
    //}

    render()
    {
      const { countdownTime, isOn, onTick} = this.props
      if (countdownTime && isOn)
      {
          this.timerId = setTimeout(() => onTick(), 1000)
      }

      if(isOn===false)
      {
          clearTimeout(this.timerId)
          onTick()
        }
      return (<div className="timer">{countdownTime}</div>) 
    }

    /*return (countdownTime) ?*/
    /*<div className="timer" onClick={e => {
                   e.preventDefault()
                   onResetTimer(resetTime)}}>
        <span>Done, click to start over</span>
    </div>*/
}

Countdown.propTypes = {
    countdownTime: PropTypes.number,
    isOn: PropTypes.bool,
    onTick: PropTypes.func
}

Countdown.defaultProps = {
    countdownTime: 20,
    isOn: true,
    onTick: f=>f
}
  

export default Countdown