import React from 'react';
import styled from 'styled-components'
import Character from './components/Character'

const Mainstyled = styled.div`
.Header{
  color: ${pr=> pr.theme.color};
  text-shadow: ${pr=> pr.theme.shade};
  font-size:${pr=> pr.theme.titleSize};
  text-align: center;
  width: 32%;
  height:70px;
  margin:4% auto;
  background-color: ${pr=>pr.theme.backgroundColor};
  border-radius:${pr=> pr.theme.radius};
  }
`
const characterDiv = styled.div`
  text-align:center;
  margin-bottom:4%;
  display:flex;
  justify-content:center;
`



const App = () => {
 
  return (
    <Mainstyled>
      <h1 className="Header">Star Wars Characters</h1>
      <characterDiv>
        <Character/>
      </characterDiv>
    </Mainstyled>
  );
}

export default App;
