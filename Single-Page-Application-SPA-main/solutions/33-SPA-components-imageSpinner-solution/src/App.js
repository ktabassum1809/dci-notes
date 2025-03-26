import styled from 'styled-components';
import imageLinks from './imageLinks.js';
import ImgItem from './ImgItem.js';

const Main = styled.main``
const H1 = styled.h1`
  text-align: center
`
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

function App() {
  return (
    <Main>
      <H1>Image Spinner Demo</H1>
      <Images>
        {imageLinks.map(url => <ImgItem key={url} url={url} />)}
      </Images>
    </Main>
  );
}

export default App;
