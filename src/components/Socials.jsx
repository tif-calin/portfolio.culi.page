import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 5rem;

  & img {
    max-width: var(--font-size);
    height: var(--font-size);
  }

  & a { 
    transition: filter var(--transition-length); 
  }
  &:hover a {
    opacity: 0.5; 
    filter: opacity(0.5);
  }
  &:hover a:hover {
    opacity: 1;
    filter: opacity(1);
  }
`;

const Socials = () => {
  return (
    <Container className="socials">
      <a href="mailto:culitif@tuta.io">
        <img src={email} alt="email"/>
      </a>
      <a href="https://www.linkedin.com/in/tif-calin/">
        <img src={linkedin} alt="linkedin"/>
      </a>
      <a href="https://github.com/tif-calin/">
        <img src={github} alt="github" />
      </a>
    </Container>
  )
}

export default Socials;
