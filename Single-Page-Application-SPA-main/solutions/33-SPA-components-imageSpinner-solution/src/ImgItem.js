import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import spinnerIcon from './images/spinner-solid.svg';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const Image = styled.img`
  width: ${props => props.width};
  display: ${props => props.display};
  animation: ${props => props.rotate?rotate:""} 2.5s linear infinite;
`
const Container = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgItem = ({ url }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container>
      <Image
        src={spinnerIcon}
        alt="spinner"
        width="30px"
        display={loaded?"none":""}
        rotate
      />
      <Image
        src={url}
        alt="some random thing"
        width="100%;"
        display={loaded?"":"none"}
        onLoad={() => setLoaded(true)}
      />
    </Container>
  );
};

export default ImgItem;
