import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
`;

const Socials = () => {
  return (
    <Container className="Socials">
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
