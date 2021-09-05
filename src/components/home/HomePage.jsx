import React from 'react';
import '../../style/home.scss';
import svg from './dentata.svg';

const Home = () => {
  return <div className="Home">
    <div>
      <section>
        <div>
          <h1>hello! i'm culi</h1>
          <span>i'm a full stack software engineer</span>
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>

    <div className="wave-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>

    <div>
      <section>
        <div>
          <h3>What do you do?</h3>
          <p>
            I really value having a solid understanding of industry standard tools (react, javascript, nodejs, typescript, docker) and I love learning about up and coming technologies (deno, rust, elm), but I also have a deep appreciation for making things by hand (html, css, javascript). I'm a versatile developer with a background in mathematics who likes to get their hands dirty with everything from convolutional neural networks to social choice theory.
          </p>

          <br/>

          <p>
            Check out my now page to see what worlds I'm currently diving into.
          </p>
        </div>
      </section>
    </div>
  </div>;
};

export default Home;

