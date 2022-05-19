import React from 'react';
import {Styled} from './styled';
import {NavBar} from '../NavBar';
import I from "../../assets/img.png"
import {Footer} from "../Footer";

import '../../styles/App.css'
import {MainPage} from "../MainPage";

const IMAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/example-1-1deff.appspot.com/o/img.png?alt=media&token=2aa4927b-d9d2-49a8-873d-fbbb566fcf04';

export const App = () => {
    return (
        <Styled.Container>
            <Styled.StyledDiv>
                <NavBar width='100%'/>
            </Styled.StyledDiv>
            <div
                style={{
                    flex: 1,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${IMAGE_URL})`
                }}>
                <MainPage/>
            </div>
            <Styled.StyledDiv>
                duck
            </Styled.StyledDiv>
            <Styled.StyledDiv>
                <Footer width='100%'/>
            </Styled.StyledDiv>
        </Styled.Container>
    );
}
