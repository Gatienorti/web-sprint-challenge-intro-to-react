import React from 'react';
import {Accordion, Card} from 'react-bootstrap';

import styled from 'styled-components'

const Style = styled.div`
width: 20em;
font-weight:bold;
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
    box-shadow: 
        0px 0px 7px 2px#00fc15,
        inset 0px 0px 11px 3px #00fc15; 
    
    border:0;
    &:hover{box-shadow: 
        0px 0px 9px 3px#00fc15,
        inset 0px 0px 15px 4px #00fc15; }
}
.card-header{
    border-bottom:none;
}
.accordion{
    margin-bottom:10px;
}
ul{
    list-style-type:none;
    padding:0;
}

`

function FinalAccordion({character}) {

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