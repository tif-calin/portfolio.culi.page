import React from 'react';

const InlineToggleText = ({text, extraText, name, value}) => {
  const id = Math.random().toString(36).substring(7);

  return <>
    <input 
      className="InlineToggleText" 
      name={name} 
      type="checkbox"
      value={value}
      id={id}
    />
    <label htmlFor={id}><span>{text}</span></label>
    <span>{extraText}</span>
  </>;
};

export default InlineToggleText;
