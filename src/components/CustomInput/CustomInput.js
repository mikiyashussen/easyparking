import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import './CustomInput.css'

const CustomInput = ({inputText,id, onUserInput, type}) => {
    const getInputs = (event) => {
        console.log(event.target.id);
        onUserInput({
            id: event.target.id,
            value: event.target.value
        });
    }
    return (
        <div className='inputs'>
            {type !== 'password' ? 
                 <InputGroup>
              {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                <FormControl
                placeholder={inputText}
                id={id}
                onChange = {getInputs}
                aria-label={inputText}
                aria-describedby="basic-addon1"
                style={{borderRadius: '8px 8px 8px 8px'}}
                />
            </InputGroup> : 
                <InputGroup>
                    <FormControl
                    placeholder={inputText}
                    type={type}
                    id={id}
                    onChange = {getInputs}
                    aria-label={inputText}
                    aria-describedby="basic-addon1"
                    style={{borderRadius: '8px 8px 8px 8px'}}
                    />
                 </InputGroup> 
            } 
        </div>
    )
}
export default CustomInput;

