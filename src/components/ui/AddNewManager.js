import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const AddNewManager = ({onNewManager=f=>f, onResetDraft=f=>f}) => {
    let _name
    const submit = e => {
        e.preventDefault()
        onNewManager(_name.value)
        _name.value = ''
        _name.focus()
    }
    const submit2 = e => {
        e.preventDefault()
        onResetDraft()
    }
    return (
        <div>
        <form className="add-name" onSubmit={submit} style={{float: 'left'}}>

            <input ref={input => _name = input}
                   type="text" 
                   placeholder="input name..." required/>
           <button className="add-color">ADD</button>
        </form>
        <div>
            <button onClick={submit2}>reset draft</button>
        </div>
        </div>
    )
}




export default AddNewManager;