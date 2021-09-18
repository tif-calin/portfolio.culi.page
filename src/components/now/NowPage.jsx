import React from 'react';
import { date2text } from './utils.js';
import '../../style/now.scss';

const LAST_UPDATED = new Date('2021-09-18T18:48Z');

// const moreInfo = {
//   swift: 'Working on an Apple Watch app with some friends',
//   'rot.js': <a href="https://ondras.github.io/rot.js/hp/">🌐</a>
// };

const NowPage = () => {
  return <>

    <div className="NowPage">
      <span>
        Welcome to my <a href="https://nownownow.com/" target="_blank" rel="noreferrer">now</a> page!
      </span>

      <section>
        <h2>Learning</h2>
        <ul>
          <span role="heading" aria-level="3">#langs</span>
          <li>Elm</li>
          <li>Swift</li>
          <li>Rust</li>
          <li>Typescript</li>
        </ul>
        <ul>
          <span role="heading" aria-level="3">#tools</span>
          <li>Docker</li>
          <li>Deno</li>
        </ul>
      </section>

      <section>
        <h2>Working on</h2>
        <ul>
          <span role="heading" aria-level="3">#new</span>
          <li>votevote</li>
          <li>mood ring apple watch app</li>
          <li>bluestock list</li>
          <li>catfood.fyi</li>
        </ul>
        <ul>
          <span role="heading" aria-level="3">#old</span>
          <li>bookbook</li>
        </ul>
      </section>

      <section>
        <h2>Reading</h2>
        <ul>
          <span role="heading" aria-level="3">#books</span>
          <li>All About Love <span>bell hooks</span></li>
          <li>Grokking Algorithms <span>Aditya Bhargava</span></li>
          <li>Arts of Living on a Damaged Planet <span>Anna Lowenhaupt Tsing, Heather Anne Swanson, Elaine Gan, and Nils Bubandt</span></li>
          <li>The Gift Paradigm <span>Alain Caillé</span></li>
        </ul>
      </section>

      <section>
        <h2>On the backburner</h2>
        <ul>
          <li>GIS</li>
          <li>rot.js</li>
          <li>Redis</li>
          <li>Elasticsearch</li>
          <li>PHP</li>
          <li>Godot</li>
          <li>GraphQL</li>
          <li>Clojure</li>
        </ul>
      </section>

      <p className="last-updated">
        Status: <span>open to work</span>
        <br/>
        Up to date as of <span>{date2text(LAST_UPDATED)}</span>
      </p>
    </div>
  </>;
};

export default NowPage;
