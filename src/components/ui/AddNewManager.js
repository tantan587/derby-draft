import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Menu.css'

const AddNewManager = ({onNewManager=f=>f}) => {
    let _name
    const submit = e => {
        e.preventDefault()
        onNewManager(_name.value)
        _name.value = ''
        _name.focus()
    }
    return (
        <form className="add-name" onSubmit={submit}>

            <input ref={input => _name = input}
                   type="text" 
                   placeholder="input name..." required/>
           <button className="add-color">ADD</button>
        </form>
    )
}




export default AddNewManager;