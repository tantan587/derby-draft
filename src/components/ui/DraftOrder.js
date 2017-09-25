import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const DraftOrder = ({managers=[]}) => {
    return (
        <div className="draft-order">
         <p>Draft Order:</p>
        {(managers.length === 0) ?
            <p>No Managers Listed.</p> :
            managers.map(manager =>
                <DraftOrderName key={manager.id}
                    {...manager} />
            )
        }
        </div>
    )
}

class DraftOrderName extends React.Component {

    render() {
        const {name} = this.props
        return (
            <div className="draft-order-name">
              {name}
            </div>
        )
    }

}

DraftOrderName.propTypes = {
    name: PropTypes.string.isRequired,
}




export default DraftOrder;