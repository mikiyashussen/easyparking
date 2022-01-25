import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import './CustomInput.css'

const CustomInput = ({inputText, onUserInput}) => {
    const getInputs = (event) => {
        onUserInput(event.target.value)
    }
    return (
        <div className='inputs'>
            <InputGroup>
              {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                <FormControl
                placeholder={inputText}
                onChange = {getInputs}
                aria-label={inputText}
                aria-describedby="basic-addon1"
                style={{borderRadius: '8px 8px 8px 8px'}}
                />
            </InputGroup>
               
        </div>
    )
}
export default CustomInput;

