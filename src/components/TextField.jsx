import React from 'react'

function TextFieldComponent(props) {

  const { handleText } = props;

  const handleChange = (e) => {
    let text = e.target.value;
    handleText(text)
  }

  return (
    <div className='quiz--textField'>
        <input 
            type="number"
            onChange={handleChange}
            required="required"
        />
        <span>Amount Of Questions</span>
    </div>
  )
}

export default TextFieldComponent




