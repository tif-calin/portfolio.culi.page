import React from 'react';

const InlineTextRadio = ({ text, name, value, checked }) => {
  const id = Math.random().toString(36).substring(7);

  return <>
    <input 
      className="InlineTextRadio" 
      name={name} 
      type="radio"
      value={value}
      id={id}
      defaultChecked={checked}
    />
    <label htmlFor={id}><span>{text}</span></label>
  </>;
};

export default InlineTextRadio;
