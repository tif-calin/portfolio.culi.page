import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Socials = () => {
  return (
    <ul className="Socials">
      <a href="mailto:culitif@tuta.io">
        <img src={email} alt="email"/>
      </a>
      <a href="https://www.linkedin.com/in/tif-calin/">
        <img src={linkedin} alt="linkedin"/>
      </a>
      <a href="https://github.com/tif-calin/">
        <img src={github} alt="github" />
      </a>
    </ul>
  )
}

export default Socials;
