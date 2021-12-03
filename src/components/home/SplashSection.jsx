import Socials from '../common/Socials';

import svg from '../../assets/dentata.svg';

const greetings = ['Hi', 'Hello', "Hello", 'Hey', 'Howdy', 'Hiya'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const SplashSection = () => {
  return (
    <div id="splash">
      <section>
        <div>
          <h1>{randomGreeting}<span className="highlight">,</span> I<span className="highlight">'</span>m Culi!</h1>
          <span>full-stack software engineer</span>
          <Socials/>  
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>
  );
};

export default SplashSection;
