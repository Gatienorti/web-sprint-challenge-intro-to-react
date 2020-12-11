import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'

const Mainstyled = styled.div`
.Header{
  color: ${pr=> pr.theme.color};
  text-shadow: ${pr=> pr.theme.shade};
  font-size:${pr=> pr.theme.titleSize};
  text-align: center;
  width: 37%;
  height:80px;
  margin:4% auto;
  background-color: ${pr=>pr.theme.backgroundColor};
  border-radius:${pr=> pr.theme.radius};
  box-shadow: inset 0px 0px 10px  #00fc15; 
  }
`
const CharacterDiv = styled.div`
  text-align:center;
  margin-bottom:4%;
  display:flex;
  justify-content:center;
`
const App = () => {
const [character, setCharacter]= useState([])

useEffect(()=>{
    Axios.get('https://swapi.dev/api/people/')
        .then(res =>
          setCharacter(res.data.results)
        )
        .catch(err=>
            console.log(err)
        )
},[])
  
  return (
    <Mainstyled>
      <h1 className="Header">Star Wars Characters</h1>
      <CharacterDiv>
        <Character character={character}/>
      </CharacterDiv>
    </Mainstyled>
  );
}

export default App;
