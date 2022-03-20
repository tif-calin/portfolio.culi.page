import React from 'react';
import Prism from 'prismjs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxStyle from '../../style/_prism.css';

import acpindexpic from '../../assets/acpindex450.png';
import bookbook from '../../assets/bookbook450.png';
import curbee from '../../assets/curbee450.png';
import github from '../../assets/github.svg';
import external from '../../assets/external.svg';
import svg_elm from '../../assets/elm.svg';
import svg_javascript from '../../assets/javascript.svg';
import svg_python from '../../assets/python.svg';
import svg_ruby from '../../assets/ruby.svg';
// import svg_rust from '../../assets/rust.svg';
// import svg_swift from '../../assets/swift.svg';
import svg_typescript from '../../assets/typescript.svg';

const rcvDocstrings = {
  javascript: ``,
  python: `
    """
    INPUT (a DataFrame that looks like)::
        RED	GRN	BLU	
    alex 1   2   3
    anna 2   3   1
    emma 1   3   2
    imam 2   1   3
    ioan 3   1   2
    jena 3   2   1
    jose 1   2   3
    luis 2   3   1
    mary 2   3   1
    mike 2   3   1
    ming 3   2   1
    noor 1   2   3
    olga 3   2   1
    rosa 2   3   1
    shay 1   3   2
    siti 3   2   1
    ying 1   2   3
    zack 2   1   3
      
    OUTPUT (an array of dicts, representing the outcome of a given round)::
    [
      {
        RED: 6,
        GRN: 3,
        BLU: 9
      },
      {
        RED: 8
        BLU: 10
      }
    ]
    """
  `.replace(/\n {2}/g, '\n    ').trim(),
};

const rcvCodes = {
  javascript: `
    "use strict";

    const rankedChoiceVote = (candidates, votes) => {
      // to keep track of every round
      const results = [];

      const dropped = [];
      let isOver = false;
      while (!isOver) {
        // create the result object
        // initialize values of all undropped candidates to 0
        const result = {};
        candidates.forEach(candidate => {
          if (!dropped.includes(candidate)) result[candidate] = 0;
        });

        // loop through each vote 
        // find the first candidate that wasn't dropped
        votes.forEach(vote => {
          for (const candidate of vote) {
            if (Object.keys(result).includes(candidate)) {
              result[candidate]++;
              break;
            }
          }
        });

        // drop the lowest scoring candiadate(s) by adding them to the dropped array
        const lowestScore = Math.min(...Object.values(result));
        Object.keys(result).forEach(key => {
          if (result[key] === lowestScore) dropped.push(key);
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
      }

      return results;
    };
  `.replace(/\n {4}/g, '\n').trim(),
  python: `
    import pandas as pd
    import numpy as np

    def ranked_choice(data: pd.DataFrame) -> list:
      ${false && rcvDocstrings.python}
      
      # strip off all the candidates with no first choices 
      outcome = df.iloc[:, :-3].idxmin(1).value_counts()
      remaining = outcome.index.tolist()
      rounds = [outcome]
      
      i = 0
      while True:
        # get the outcome for the round 
        outcome = df.iloc[:, :-3][remaining].idxmin(1).value_counts()
        
        # save the outcome in the list of rounds 
        rounds.append([outcome.get(c) for c in candidates])
        
        # check for win conditions
        if (
          outcome.max() > len(df)/2 or 
          len(remaining) == len(outcome.nsmallest(1, keep = 'all'))
        ): break
        
        i += 1
        
      return rounds
  `.replace(/\n {4}/g, '\n').trim(),
  // swift: `/* swift implmentation coming soon */`,
  typescript: `
    "use strict";

    interface roundResult {
      [key: string]: number
    };
    
    const rankedChoiceVote = (candidates: string[], votes: string[][]): roundResult[] => {
      // to keep track of every round
      const results: roundResult[] = [];
  
      const dropped: string[] = [];
      let isOver = false;
      while (!isOver) {
        // create the result object
        // initialize values of all undropped candidates to 0
        const result: roundResult = {};
        candidates.forEach(candidate => {
          if (!dropped.includes(candidate)) result[candidate] = 0;
        });

        // loop through each vote 
        // find the first candidate that wasn't dropped
        votes.forEach(vote => {
          for (const candidate of vote) {
            if (Object.keys(result).includes(candidate)) {
              result[candidate]++;
              break;
            }
          }
        });

        // drop the lowest scoring candiadate(s) by adding them to the dropped array
        const lowestScore = Math.min(...Object.values(result));
        Object.keys(result).forEach(candidate => {
          if (result[candidate] === lowestScore) dropped.push(candidate);
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
      }
  
      return results;
    };
  `.replace(/\n {4}/g, '\n').trim(),
  elm: `{- elm implementation coming soon -}`,
  ruby: `
    class RCVElection
      attr_reader :ballots, :winners, :rounds

      def initialize(candidates, ballots)
        @candidates = Set.new candidates.uniq
        @ballots = ballots.map {|ballot| ballot.select {|cnd| @candidates.include?(cnd)}}

        get_results
      end

      def get_results
        rounds = Array.new

        dropped = Set.new
        no_winner = true
        while no_winner
          new_round = {}

          # calc number of first picks for each candidate
          @ballots.each do |ballot|
            vote = ballot.find {|elem| !dropped.include?(elem)}
            if vote
              new_round[vote] ||= 0
              new_round[vote] += 1
            end
          end

          # drop all the candidates with the lowest score
          min = new_round.values.min
          dropped += new_round.keys.select {|key| new_round[key] == min}

          # check if they're all tied or if someone's won
          max = new_round.values.max
          tot = new_round.values.sum
          if max > tot / 2 || new_round.values.uniq.size == 1
            no_winner = false
          end

          puts new_round
          rounds.push(new_round)
        end

        max = rounds[-1].values.max
        @winners = rounds[-1].keys.select {|key| rounds[-1][key] == max}
        @rounds = rounds
      end
    end
  `.replace(/\n {4}/g, '\n').trim(),
  //rust: `rust implementation coming soon`,
};

const langIcons = {
  javascript: svg_javascript,
  python: svg_python,
  ruby: svg_ruby,
  // rust: svg_rust,
  // swift: svg_swift,
  typescript: svg_typescript,
  elm: svg_elm
};

const ProjectsSection = () => {
  const [rcvCode, setRcvCode] = React.useState('javascript');

  console.log(rcvCodes[rcvCode]);

  React.useEffect(() => {
    const precode = document.querySelector('pre > code');
    Prism.highlightElement(precode);
    Prism.highlightAll();
  }, [rcvCode]);

  const handleRCVChange = e => {
    setRcvCode(e.target.value);
  };

  return <>
    <div id="projects" className="ProjectsSection">
      <section>
        <h3 className="section-heading"><a href="#projects">Projects</a></h3>
        <ul>

          <label>
            <input type="checkbox" defaultChecked={true}/>
            <li>
              <img src={acpindexpic} alt="acp index site"/>
              <div>
                <h4 className="project-title">
                  <a href="https://acp-index.netlify.app/" target="_blank" rel="noreferrer">ACP-Index</a>
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
              <h4 className="project-title">Polylingual RCV</h4>
              <p>
                Ranked choice voting, or instant runoff voting, is one of the simplest electoral system that allows voters to rank their preferred candidates in order. A personal project of mine has been to try to write an algorithm for RCV in as many programming languages as I can.
              </p>
              <div className="tabs" name="rcv-tabs">
                <nav>
                  {
                    Object.keys(rcvCodes).map(lang =>
                      <label key={lang}>
                        <input
                          type="radio"
                          name="rcv-tabs"
                          value={lang}
                          onClick={handleRCVChange}
                          defaultChecked={rcvCode === lang}
                        />
                        <span>
                          <img 
                            src={langIcons[lang]} 
                            alt={`icon for the ${lang} programming language`}
                          />
                          <span>{lang}</span>
                        </span>
                      </label>
                    )
                  }
                </nav>
                <SyntaxHighlighter language={rcvCode} style={syntaxStyle}>
                  {rcvCodes[rcvCode]}
                </SyntaxHighlighter>
              </div>
            </li>
          </label>

        </ul>
      </section>
    </div>
  </>;
};

export default ProjectsSection;
