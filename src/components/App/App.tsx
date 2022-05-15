import React from 'react';
import {Styled} from './styled';
import { NavBar } from '../NavBar';
import I from "../../assets/img.png"
import '../../styles/App.css'

export const App = () => {
    return (
        <Styled.Container>
            <Styled.StyledDiv>
                <NavBar width='100%'/>
            </Styled.StyledDiv>
            <div style={{flex: 1, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundImage:`url(${I})`}}>
                Hello
            </div>
            <Styled.StyledDiv>
                Hello
            </Styled.StyledDiv>
            <Styled.StyledDiv>
                NavBarUnder
            </Styled.StyledDiv>
        </Styled.Container>
    );
}
