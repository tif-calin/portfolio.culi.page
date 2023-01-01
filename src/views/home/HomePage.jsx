import React from 'react';

import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SplashSection from './components/SplashSection';

import '../../style/home.scss';

const HomePage = () => {
  return <div className="HomePage">
    <SplashSection/>

    <div className="wave-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path 
          stroke="#3f474f" 
          strokeWidth="3" 
          d="
            M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,
            127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,
            95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0
          " 
          className="shape-fill"/>
      </svg>
    </div>

    <AboutSection/>

    <ProjectsSection/>

    <div id="tools">
      <section>
        <h2 className="section-heading"><a href="#tools">Tools</a></h2>
        <ul>
          <h4>Languages</h4>
          <li>TypeScript</li>
          <li>Ruby</li>
          <li>Python</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>SQL</li>
          <li>SVG</li>
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
        {/*<span>Check out my <Link className="special" to="/uses">uses</Link> page for a more complete list of the tech that I use.</span>*/}
        <span>For a more complete list of tools I use, please check out 
          <a 
            href="https://stackshare.io/tif-calin/my-stack"
            target="_blank" 
            rel="noreferrer"
          > my Stackshare</a>!
        </span>
      </section>
    </div>

    <div id="contact">
      <section>
        <span>Think we can work together?</span>
        <h2 className="section-heading"><a href="mailto:culitif@tuta.io">Contact</a></h2>
      </section>
    </div>
  </div>;
};

export default HomePage;
