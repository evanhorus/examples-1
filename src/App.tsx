import React from 'react';
import './App.css'
import styled from "styled-components";

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
  height: 400%;
`;

export const App = () => {
    return (
        <Container>
            <div className='myClass'>
                Hello
            </div>
            <div style={{backgroundColor: 'blue', flex: 1}}>
                Hello
            </div>
            <StyledDiv>
                Hello
            </StyledDiv>
        </Container>
    );
}
