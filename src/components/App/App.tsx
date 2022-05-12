import React from 'react';
import '../../styles/App.css'
import {MyComponents} from "../MyComponent";
import {URLFetch} from "../URLFetch";
import {ExamplePage} from "../../pages";
import {Styled} from './styled';

function MyFunction() {

}

const MyFunction2 = () => {
    return 2;
}

const D = () => 2;

const a = {
    b: 2,
    c: 4,
    d: 5,
}


export const App = () => {
    const {c, d, b} = a;


    console.log(c + d + b);
    return (
        <Styled.Container>
            <Styled.ModifiedContainer>
                <div className='myClass'>
                    Hello random text
                </div>
            </Styled.ModifiedContainer>
            <div style={{backgroundColor: 'blue', flex: 1}}>
                <ExamplePage>
                    <MyComponents myProp={42}/>
                    <URLFetch/>
                </ExamplePage>
                Hello
            </div>
            <Styled.StyledDiv>
                Hello
            </Styled.StyledDiv>
            <div>
                what is here
            </div>
        </Styled.Container>
    );
}