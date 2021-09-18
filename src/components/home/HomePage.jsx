import React from 'react';
import { Link } from 'react-router-dom';
import InlineTextRadio from '../InlineTextRadio';
import '../../style/home.scss';

import svg from '../../assets/dentata.svg';
import ProjectsSection from './ProjectsSection';

const greetings = ['Hi', 'Hello', "Hello", 'Hey', 'Howdy', 'Helloooo', 'Hiya'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

/*
TODO:
 - NOW page
 - USES page
 - add links to projects
 - add header
 - make projects clickable to expand
 - finish writing rcv
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
      <p>Click to checkout some of the <a className="special" href="https://culi.page/toys/" target="_blank" rel="noreferrer">toys</a> I've built for myself using vanilla HTML/CSS/Javascript!</p>
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

    <ProjectsSection/>

    <div id="tools">
      <section>
        <h3 className="section-heading"><a href="#tools">Tools</a></h3>
        <ul>
          <h4>Languages</h4>
          <li>JavaScript</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>SVG</li>
          <li>SQL</li>
        </ul>
        <ul>
          <h4>Frameworks</h4>
          <li>Node.js</li>
          <li>React</li>
          <li>Express</li>
          <li>Webpack</li>
          <li>Yarn</li>
          <li>Jest</li>
          <li>Sequalize</li>
        </ul>
        <ul>
          <h4>APIs & Libraries</h4>
          <li>Algolia</li>
          <li>Twilio</li>
          <li>Cloudinary</li>
          <li>Pandas</li>
          <li>React Testing Library</li>
          <li>bcrypt</li>
          <li>CSS in JS</li>
        </ul>
        <ul>
          <h4>Tools</h4>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Postman</li>
          <li>pgAdmin</li>
          <li>Netlify</li>
          <li>VS Code</li>
          <li>Ubuntu</li>
        </ul>
        <span>Check out my <Link className="special" to="/uses">uses</Link> page for a more complete list of the tech that I use.</span>
      </section>
    </div>

    <div id="contact">
      <section>
        <span>Think we can work together?</span>
        <h3 className="section-heading"><a href="mailto:culitif@tuta.io">Contact</a></h3>
      </section>
    </div>
  </div>;
};

export default HomePage;

