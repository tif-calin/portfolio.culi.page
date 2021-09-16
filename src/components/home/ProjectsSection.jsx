import React from 'react';
import Prism from 'prismjs';

import acpindexpic from '../../assets/acpindex450.png';
import bookbook from '../../assets/bookbook900.png';
import curbee from '../../assets/curbee450.png';
import github from '../../assets/github.svg';

const rcvCodes = {
  javascript: `
    const rankedChoiceVote = (candidates, votes) => {
      // to keep track of every round
      const results = [];

      const dropped = [];
      let isOver = false;
      while (!isOver) {
        // create the result object
        // initialize values of all undropped candidates to 0
        const result = {};
        candidates.forEach(suggestion => {
          if (!dropped.includes(suggestion)) result[suggestion] = 0;
        });

        // loop through each vote 
        // find the first candidate that wasn't dropped
        votes.forEach(vote => {
          for (const candidate of vote) {
            if (Object.keys(result).includes(suggestion)) {
              result[suggestion]++;
              break;
            }
          }
        });

        // drop the lowest scoring candiadate(s) by adding them to the dropped array
        Object.keys(result).forEach(key => {
          if (result[key] === Math.min(...Object.values(result))) dropped.push(key);
        });

        // check the isOver conditions: 
        //   (1) everyone remaining is tied, 
        //   (2) someone has more than 50% of the (remaining) votes, 
        if (Object.values(result).every(
          val => val === Object.values(result)[0]
        )) isOver = true;
        else {
          const topScore = Math.max(...Object.values(result));
          const totScore = Object.values(result).reduce((acc, val) => acc + val, 0);
          if (topScore > (totScore / 2)) isOver = true;
        }

        // keep a record of each round
        results.push(result);

        // in case it goes on for too long:
        if (results.length > 999) break;
      }

      return results;
    }
  `.replace(/\n {4}/g, '\n').trim(),
  typescript: ``,
  python: ``,
  elm: ``
};

const ProjectsSection = () => {
  const [rcvCode, setRcvCode] = React.useState('javascript');

  React.useEffect(() => {
    const precode = document.querySelector('pre > code');
    Prism.highlightElement(precode);
  }, [rcvCode]);

  const handleRCVChange = e => {
    setRcvCode(e.target.value);
  }

  return <>
    <div id="projects" className="ProjectsSection">
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
                  <label>
                    <input 
                      type="radio" 
                      name="rcv-tabs" 
                      value="javascript" 
                      defaultChecked={true}
                      onClick={handleRCVChange}
                    />
                    <span>javascript</span>
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="rcv-tabs" 
                      value="typescript"
                      onClick={handleRCVChange}
                    />
                    <span>typescript</span>
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="rcv-tabs" 
                      value="python"
                      onClick={handleRCVChange}
                    />
                    <span>python</span>
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="rcv-tabs" 
                      value="elm"
                      onClick={handleRCVChange}
                    />
                    <span>elm</span>
                  </label>
                </nav>
                <pre>
                  <code className="language-javascript">{rcvCodes[rcvCode]}</code>
                </pre>
              </div>
            </li>
          </label>

        </ul>
      </section>
    </div>
  </>;
};

export default ProjectsSection;
