import React, { useEffect } from 'react';
import { date2text } from './utils.js';
import '../../style/now.scss';
import NowSection from './NowSection.jsx';

// const LAST_UPDATED = new Date('2021-09-18T18:48Z');
const LAST_UPDATED = new Date('2021-10-01T17:43Z');

const NowPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>

    <div className="NowPage">
      <h1>
        Welcome to my <a href="https://nownownow.com/" target="_blank" rel="noreferrer">now</a> page!
      </h1>

      <section className="changelog-page">
        <h2>Changelog</h2>
        <details>
          <summary>2021, Oct 01</summary>
          <ul>
            <span>learning_tools_next.js</span>
            <span>projects_new_catfood.fyi</span>
            <span>projects_existing_acp-index</span>
            <span>projects_existing_bookbook</span>
          </ul>
        </details>
        <details>
          <summary>2021, Sep 18</summary>
          <p>created initial now page</p>
        </details>
      </section>

      <NowSection 
        title="Learning" 
        lists={{
          langs: {
            Elm: <p>I'm in love with the design philosophy behind this project. I've been going through the Elm docs (which doubles as a tutorial) as well as exercises on <a href="https://exercism.org/tracks/elm" target="_blank" rel="noreferrer">exercism.org</a>.</p>, 
            Swift: <p>A friend of mine recently asked if I wanted to help them make a mood ring Apple Watch app. So I've been learning Swift.</p>, 
            Rust: <p>Rust is so in right now! It's a language I've wanted to learn for a long time and after going through this amazing introductory <a href="https://fasterthanli.me/articles/a-half-hour-to-learn-rust" target="_blank" rel="noreferrer">tutorial</a>, I got really motivated to dig in deeper. Soon I'll be able to <a href="https://github.com/ansuz/RIIR" target="_blank" rel="noreferrer">RIIR</a>!</p>, 
            Typescript: <p>I've been practicing Typescript for a couple of months. I have a really solid understanding of Javascript and have experience with statically typed languages (Java and C++) so the basics were really easy to pick up.</p>
          },
          tools: {
            'Next.js': <p>The Next.js docs have a great tutorial on their site for building a blog with Next. I'm working through that right now and I'm really impressed by Next so far.</p>,
            Docker: <p>While in college, I wrote a Discord bot in Python to message our discord whenever the our student senate website was updated with a new bill. At some point I was trying to give the program to a friend who could run it 24/7 and he casually told me to "just put it in a Docker container." To this day, I'm still working on porting old Python projects into Docker containers. Right now I want to take some Python code I wrote to scrape website for catfood data for a project I'm working on (see: catfood.fyi below).</p>, 
            // Redis: <p>I've recently realized Redis is not just a way to supplement your database but can actually BE your database. So I've been digging into it more deeply to see how I could implement it in some of my side projects.</p>
          }
        }}
        start="Elm"
      />

      <NowSection
        title="Projects"
        lists={{
          existing: {
            'acp-index': <p>
              Today, we finally merged some features I worked on a couple of weeks ago that ditches our auth system to utilize GitHub's OAuth API. In addition, I've been meeting up biweekly with some past team members to add new features and polish the UX.
            </p>,
            bookbook: <p>
              One of my favorite projects I've worked on was an app, called <a href="https://bookbookbook.club/">bookbook</a>, which helps book clubs democratically vote on which book to read next using ranked choice voting. I've been working on updating the old code to utilize modern React features and be more responsive on mobile.
            </p>,
            // votevote: ``
          },
          new: {
            // 'mood ring apple watch app': <p>A friend of mine wanted to work on an Apple Watch app. I'm fascinated by the different design philosophies that have to be adapted to make a good app on such a medium. The end goal is some sort of "mood ring" app that takes into account biometric data! Right now I'm mostly just practicing my Swift.</p>,
            'catfood.fyi': <><p>I wrote a couple of Python scrapers before to scrape catfood data from various sites. This was mostly for my own personal benefit at first (I have two lovely cats). I wanted to collect macronutrient, price, and ingredient data and then analyze to find the best quality and lowest costing (did you know catfood had the highest increase in shoplifting rates of any grocery store product during the pandemic??) catfoods available. I think this data and these tools could really come in handy to other cat parents and want to build out a website that allows people to access them. For now I'm trying to consolidate my various bits of relevant Python code to put into a public repo.</p>
            <p>I made a page outlining some of my goals for this project <a href="https://culi.page/cats">here</a>!</p>
            </>
          },
          idea: {
            'all the colorspaces': <p>You might have heard of RGB, HSL, HSV, and CMYK, but have you ever played around with <a href="https://sensing.konicaminolta.us/us/blog/understanding-the-cie-lch-color-space/" target="_blank" rel="noreferrer">LCh</a>, HSLuv, NCS, or <a href="https://bottosson.github.io/posts/colorpicker/" target="_blank" rel="noreferrer">Okhsv</a>? There's a whole world of color spaces out there and I want to collect them all in one site that allows you to compare and contrast each of them.</p>,
            /* bluestock: `` */
          }
        }}
        start="all the colorspaces"
      />

      <NowSection
        title="Reading"
        lists={{
          books: {
            'All About Love': <div>
              <p>Author: bell hooks</p>
              <p>Progress: <progress value="0.9">90%</progress></p>
            </div>,
            'Grokking Algorithms': <div>
              <p>Author: Aditya Bhargava</p>
              <p>Progress: <progress value="0.45">45%</progress></p>
            </div>,
            'Arts of Living on a Damaged Planet': <div>
              <p>Authors: Anna Lowenhaupt Tsing, Heather Anne Swanson, Elaine Gan, and Nils Bubandt</p>
              <p>Progress: <progress value="0.12">12%</progress></p>
            </div>,
            'The Gift Paradigm': <div>
              <p>Author: Alain Caillé</p>
              <p>Progress: <progress value="0.25">25%</progress></p>
            </div>
          }
        }}
        start="All About Love"
      />

      {/* <NowSection
        title="Backburner"
        lists={{
          langs: {
            /* PHP: <p></p>, 
            Clojure: <p>I've been itching to try out a Lisp dialect for a while and Clojure has been a consistently most-loved programming language on StackOverflow's yearly survey (second only to Rust!).</p>
          },
          tools: {
            GIS: <p>So many project ideas I've had that I've had to deprioritize because of having to pick up GIS. This is probably the thing I most wanna pick up our of the things on my backburner.</p>,
            'rot.js': <p>This is a minimalist javascript library meant for ASCII roguelike games. I wanted to pick it up to work on a project with a friend, but haven't really found the time for it.</p>,
            /* Elasticsearch: ``, 
            Godot: <p>I tried picking this up a long time ago. It seems to me to be the most promising open-source alternative to Unity. I had several ideas I wanted to work on, but last time I tried picking it up I found the tutorials in the docs to be really lacking and I haven't really tried again in a couple years.</p>,
            /* GraphQL: ``, 
            Deno: <p>I do think Deno is really promising and want to work on some projects with it at some point in the future.</p>
          }
        }}
        start="GIS"
      /> */}

      <p className="last-updated">
        Status: <span>open to work</span>
        <br/>
        Up to date as of <span>{date2text(LAST_UPDATED)}</span>
      </p>
    </div>
  </>;
};

export default NowPage;
