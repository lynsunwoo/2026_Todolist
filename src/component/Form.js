import React, { useState } from 'react';
import '../css/Form.css';

function Form({value, onChange, onCreate, onKeyPress}) {
  return (
    <>
      <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <button className="create_btn" onClick={onCreate}>추가</button>
      </div>
    </>
  )
}

export default Form;