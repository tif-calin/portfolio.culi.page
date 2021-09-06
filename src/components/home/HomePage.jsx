import React from 'react';
import '../../style/home.scss';
import InlineToggleText from '../InlineToggleText';
import svg from './dentata.svg';

const Home = () => {
  return <div className="Home">
    <div>
      <section>
        <div>
          <h1>hello<span className="highlight">,</span> i<span className="highlight">'</span>m culi</h1>
          <span>a full-stack software engineer</span>
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>

    <div className="wave-top">
      <svg data-name="layer1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>

    <div>
      <section>
        <h3>What do you do?</h3>
        <p>
          I really value having a solid understanding of <InlineToggleText text="industry standard tools" extraText="react, javascript, nodejs, typescript, docker" name="overview"/> and I love learning about <InlineToggleText text="up and coming technologies" extraText="deno, rust, elm" name="overview"/>, but I also have a deep appreciation for making things <InlineToggleText text="by hand" extraText="html, css, javascript" name="overview"/>. I'm a versatile developer with a background in mathematics who likes to get their hands dirty with everything from convolutional neural networks to social choice theory.
        </p>

        <br/>

        <p>
          Check out my now page to see what worlds I'm currently diving into.
        </p>
      </section>
    </div>
  </div>;
};

export default Home;

