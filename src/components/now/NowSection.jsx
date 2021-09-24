import React, { useState } from 'react';
import { findInNest } from './utils';

const NowSection = ({ title, lists, start }) => {

  const [info, setInfo] = useState(findInNest(lists, start));

  return <label>
    <input 
      type="radio" 
      className="section-toggle" 
      name="section-toggle"
      defaultChecked={"Projects" === title}
    />

    <section 
      className="NowSection hover-block" 
      name="title"
    >
      <h2>{title}</h2>

      <div className="info">{info}</div>

      <div className="lists" name={title}>
        {Object.keys(lists).map(list => <ul key={list}>
          <span role="heading" aria-level="3">#{list}</span>

          {Object.entries(lists[list]).map(([item, itemInfo]) => <li key={item}>
            <label>
              <input 
                name={title} 
                type="radio"
                onClick={() => setInfo(itemInfo)}
                defaultChecked={item === start}
              />
              <span>{item}</span>
            </label>
          </li>)}
        </ul>)}
      </div>
    </section>
  </label>;
};

export default NowSection;
