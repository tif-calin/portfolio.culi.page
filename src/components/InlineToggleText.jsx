import React from 'react';

const InlineToggleText = ({text, extraText, name}) => {
  const id = Math.random().toString(36).substring(7);

  return <>
    <input 
      className="InlineToggleText" 
      name={name} 
      type="radio"
      id={id}
    />
    <label htmlFor={id}><span>{text}</span></label>
    <span>{extraText}</span>
  </>;
};

export default InlineToggleText;
