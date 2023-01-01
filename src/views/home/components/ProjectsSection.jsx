import React from 'react';
// Components
import RCVProject from './RCVProject';
import IconLink from '../../../components/IconLink';
// Assets
import acpindexpic from '../../../assets/acpindex450.png';
import bookbook from '../../../assets/bookbook450.png';
import curbee from '../../../assets/curbee450.png';
import votevote from '../../../assets/votevote450.png';
import github from '../../../assets/github.svg';
import external from '../../../assets/external.svg';

const projects = [
  {
    image: votevote,
    title: 'VoteVote',
    urlSource: 'https://github.com/tif-calin/votevote',
    urlLive: 'https://votevote.page/',
    description: 'An educational toy for voting theory nerds to simulate a single election across dozens of different voting methods including Ranked Choice, Approval, Borda Count, Copeland, FPTP, Condorcet, and many more you\'ve probably never heard of! Built with Typescript, React, D3, and Styled Components.'
  }
];

const ProjectsSection = () => {
  return <>
    <div id="projects" className="ProjectsSection">
      <section>
        <h3 className="section-heading"><a href="#projects">Projects</a></h3>
        <ul>
          {projects.map(({ image, title, description, urlLive, urlSource }, i) => 
            <label key={title}>
              <input type="checkbox" defaultChecked={true} />
              <li>
                {!!(i % 2) && <img src={image} alt="screenshot of site" />}
                <div>
                  <h4 className="project-title">
                    <a href={urlLive} target="_blank" rel="noreferrer">{title}</a>
                    {urlSource && <IconLink
                      icon={github}
                      href={urlSource}
                      desc="Source Code"
                    />}
                    {urlLive && <IconLink
                      icon={external}
                      href={urlLive}
                      desc="Live Site"
                    />}
                  </h4>
                  <p>{description}</p>
                </div>
                {!(i % 2) && <img src={image} alt="screenshot of site" />}
              </li>
            </label>
          )}

          <label>
            <input type="checkbox" defaultChecked={true}/>
            <li>
              <img src={acpindexpic} alt="acp index site"/>
              <div>
                <h4 className="project-title">
                  <a href="https://acp-index.netlify.app/" target="_blank" rel="noreferrer">ACP Index</a>
                  <a href="https://github.com/index-alchemy" target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon"/>
                  </a>
                  <a href="https://acp-index.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={external} alt="external link icon"/>
                  </a>
                </h4>
                <p>
                  ACP-Index was designed to streamline the process of classroom projects. It allows students to rank project ideas in order that they'd prefer to work on them or pitch an entirely new idea. It uses students' rankings to assign teams in the most socially optimal way possible.
                </p>
              </div>
            </li>
          </label>

          <label>
            <input type="checkbox" defaultChecked={true}/>
            <li>
              <div>
                <h4 className="project-title">
                  <a href="https://www.bookbookbook.club/" target="_blank" rel="noreferrer">bookbook</a>
                  <a href="https://github.com/openbookbook/" target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon"/>
                  </a>
                  <a href="https://www.bookbookbook.club/" target="_blank" rel="noreferrer">
                    <img src={external} alt="external link icon"/>
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
            <input type="checkbox" defaultChecked={true}/>
            <li>
              <img src={curbee} alt="curbee site"/>
              <div>
                <h4 className="project-title">
                  <a href="https://www.curbee.app/" target="_blank" rel="noreferrer">Curbee</a>
                  <a href="https://github.com/curbee-by-curbees/" target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon"/>
                  </a>
                  <a href="https://www.curbee.app/" target="_blank" rel="noreferrer">
                    <img src={external} alt="external link icon"/>
                  </a>
                </h4>
                <p>
                  Curbee is a community free stuff alert system. It allows users to post furniture or other "for free" items they find on the curb and utilizes Twilio to send an SMS alert to anyone who has alerts set up for that area.
                </p>
              </div>
            </li>
          </label>

          <label>
            <input type="checkbox" defaultChecked={true}/>
            <li>
              <RCVProject />
            </li>
          </label>

        </ul>
      </section>
    </div>
  </>;
};

export default ProjectsSection;
