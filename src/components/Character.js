import React, { useState, useEffect } from 'react';
import {Accordion, Card} from 'react-bootstrap';
import Axios from 'axios'
import styled from 'styled-components'

const Style = styled.div`
width: 20em;
border: 2px;
font-size:${pr=>pr.theme.regularSize};
border-radius:${pr=> pr.theme.radius};
color:${pr=>pr.theme.color};
text-shadow:${pr=>pr.theme.shade};
justify-content:center;
text-align:center;
margin: 0 auto 4% auto;
.card{
    background-color:${pr =>pr.theme.backgroundColor};
    cursor:pointer;
    
}
ul{
    list-style-type:none;
    padding:0;
}

`

const FinalAccordion = ()=>{

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

const RenderAccordion = (character, index) => {
    return(
    <Accordion key={index}>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={character}>
            {character.name}
            
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={character}>
            <Card.Body>
                <ul>
                    <li>Height: {character.height}</li>
                    <li>Weight: {character.mass}</li>
                    <li>Birth Year: {character.birth_year}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Eye Color: {character.eye_color}</li>
                </ul>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}

    return(
        <Style>
            {character.map(RenderAccordion)}
        </Style>
    )
}

export default FinalAccordion