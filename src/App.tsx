import React from 'react';
import './App.css'
import styled from "styled-components";
import {MyComponent2, MyComponents} from "./components/MyComponent";
import {ExamplePage} from "./pages/ExamplePage";

const StyledDiv = styled.div`
  background-color: yellow;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 70%;
  background-color: red;
`;

const ModifiedContainer = styled(Container)`
  background-color: burlywood;
`

export const App = () => {
    return (
        <Container>
            <ModifiedContainer>
                <div className='myClass'>
                    Hello random text
                </div>
            </ModifiedContainer>
            <div style={{backgroundColor: 'blue', flex: 1}}>
                <ExamplePage>
                    <MyComponents myProp={42}/>
                    <MyComponent2/>
                </ExamplePage>
                Hello
            </div>
            <StyledDiv>
                Hello
            </StyledDiv>
            <div>
                what is here
            </div>
        </Container>
    );
}