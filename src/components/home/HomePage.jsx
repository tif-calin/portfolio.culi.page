import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/home.scss';
import InlineTextRadio from '../InlineTextRadio';
import svg from './dentata.svg';
import acpindexpic from './acpindex450.png';
import bookbook from './bookbook900.png';
import curbee from './curbee450.png';
import github from '../../style/github.svg';

const greetings = ['Hi', 'Hello', "Hello", 'Hey', 'Howdy', 'Helloooo', 'Hiya'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

/*
NOW page: Elm, Deno, Rust, Docker, TypeScript, GIS
*/

const HomePage = () => {

  const [output, setOutput] = React.useState(0);

  const outputs = [
    <div>
      <p>I've worked on small teams for numerous full-stack applications using tools like React, NodeJS, Express, and more. I have a solid understanding of Javascript and Python and use them almost daily on personal and team projects.</p>
      <br/>
      <p>See some of my projects <a href="#projects">below</a> for some examples.</p>
    </div>,
    <div>
      <p>Tools like deno, Elm, and Rust might still have a long way to go before they gain wide adoption, but I find that learning how to use well-built tools like these can teach us a lot about how to best use the tools we're already using.</p>
      <br/>
      <p>Check out my <Link className="special" to="/now">now</Link> page to see what I'm currently obsessing over!</p>
    </div>,
    <div>
      <p>Modern HTML, CSS, and JavaScript are powerful and often-overlooked tools. When it comes to efficient, sustainable, and dependable web design, nothing really beats a static site with minimal dependencies.</p>
      <br/>
      <p>You check out some of the tools I've built for myself using these tools <a className="special" href="https://culi.page/toys/" target="_blank" rel="noreferrer">here!</a></p>
    </div>
  ];

  return <div className="HomePage">
    <div id="splash">
      <section>
        <div>
          <h1>{randomGreeting}<span className="highlight">,</span> I<span className="highlight">'</span>m Culi</h1>
          <span>a full-stack software engineer</span>
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>

    <div className="wave-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path stroke="#3f474f" strokeWidth="3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0" className="shape-fill"></path>
      </svg>
    </div>

    <div id="about">
      <section>
        <h3 className="section-heading"><a href="#about">About</a></h3>
        
        <div>
          <form onChange={e => setOutput(e.target.value)}>
            I place a focus on having a solid grasp of <InlineTextRadio text="industry standard tools" name="overview" value={0} checked={true}/> and I genuinely enjoy picking up <InlineTextRadio text="up-and-coming technologies," name="overview" value={1}/> but I also have a deep appreciation for making things <InlineTextRadio text="by hand" name="overview" value={2}/>. 
          </form>
          <p>
            I'm a versatile developer and an eclectic learner with a background in mathematics who likes to get their hands dirty with everything from convolutional neural networks to social choice theory. 
          </p>
          <p>
            <Link to="/now">Click here to see what I'm doing now.</Link>
            </p>
        </div>

        <output>{outputs[output % outputs.length]}</output>
      </section>
    </div>

    <div id="projects">
      <section>
        <h3 className="section-heading"><a href="#projects">Projects</a></h3>
        <ul>

          <label>
            <input type="radio"/>
            <li>
              <img src={acpindexpic} alt="acp index site"/>
              <div>
                <h4 className="project-title">
                  <a href="https://acp-index.netlify.app/">ACP-Index</a>
                  <a href="https://github.com/index-alchemy">
                    <img src={github} alt="github icon"/>
                  </a>
                </h4>
                <p>
                  ACP-Index was designed to streamline the process of classroom projects. It allows students to rank project ideas in order that they'd prefer to work on them or pitch an entirely new idea. It uses students' rankings to assign teams in the most socially optimal way possible.
                </p>
              </div>
            </li>
          </label>

          <label>
            <input type="radio"/>
            <li>
              <div>
                <h4 className="project-title">
                  bookbook
                  <a href="https://github.com/openbookbook/">
                    <img src={github} alt="github icon"/>
                  </a>
                </h4>
                <p>
                  Democratic decision making for book clubs made easy. It utilizes ranked choice voting to allow members to rank their preferences for their next read. The app is dedicated to a minimalist setup design philosophy (inspired by when2meet) and requires no emails. Just make a "ballot" and an admin code and share the url with your friends!
                </p>
              </div>
              <img src={bookbook} alt="bookbook site"/>
            </li>
          </label>

          <label>
            <input type="radio"/>
            <li>
              <img src={curbee} alt="curbee site"/>
              <div>
                <h4 className="project-title">
                  Curbee
                  <a href="https://github.com/curbee-by-curbees/">
                    <img src={github} alt="github icon"/>
                  </a>
                </h4>
                <p>
                  Curbee is a community free stuff alert system. It allows users to post furniture or other "for free" items they find on the curb and utilizes Twilio to send an SMS alert to anyone who has alerts set up for that area.
                </p>
              </div>
            </li>
          </label>

          <label>
            <input type="radio"/>
            <li>
              <h4 className="project-title">Polylingual RCV</h4>
              <p>
                Ranked choice voting, or instant runoff voting, is one of the simplest electoral system that allows voters to rank their preferred candidates in order. A personal project of mine has been to try to write an algorithm for RCV in as many programming languages as I can.
              </p>
              <div className="tabs" name="rcv-tabs">
                <nav>
                  <label><input type="radio" name="rcv-tabs"/><span>javascript</span></label>
                  <label><input type="radio" name="rcv-tabs"/><span>typescript</span></label>
                  <label><input type="radio" name="rcv-tabs"/><span>python</span></label>
                  <label><input type="radio" name="rcv-tabs"/><span>elm</span></label>
                </nav>
                <code>
                  hello
                </code>
              </div>
            </li>
          </label>

        </ul>
      </section>
    </div>

    <div id="tools">
      <section>
        <h3 className="section-heading"><a href="#tools">Tools</a></h3>
      </section>
    </div>

    <div id="contact">
      <section>
        <h3 className="section-heading"><a href="#contact">Contact</a></h3>
      </section>
    </div>
  </div>;
};

export default HomePage;

