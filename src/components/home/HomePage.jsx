import React from 'react';
import '../../style/home.scss';
import svg from './dentata.svg';

const Home = () => {
  return <div className="Home">
    <div>
      <section>
        <div>
          <h1>hello! i'm culi</h1>
          <span>I'm a full stack software engineer</span>
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>

    <div class="wave-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div>

    <div>
      <section>
        <div>
          <h3>Hello hello hello</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quo assumenda id quis esse est quisquam doloribus quidem quam culpa, similique nostrum facere doloremque aspernatur asperiores possimus ipsa recusandae iste.</p>
        </div>
      </section>
    </div>
  </div>;
};

export default Home;

