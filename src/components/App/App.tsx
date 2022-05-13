import React from 'react';
import {MyComponents} from "../MyComponent";
import {URLFetch} from "../URLFetch";
import {ExamplePage} from "../../pages";
import {Styled} from './styled';
import Modal from 'react-modal';

import '../../styles/App.css'
import styled from "styled-components";

Modal.setAppElement('#root');

const navbarElements = [
    {
        id: '1',
        title: 'Головна',
        isCurrent: true,
        redirectPage: '/',
    },
    {
        id: '2',

        title: 'Чому ми',
        isCurrent: false,
        redirectPage: '/why',
    },
    {
        id: '3',

        title: 'Галерея',
        isCurrent: false,
        redirectPage: '/gallery',
    },
    {
        id: '4',

        title: 'Новини',
        isCurrent: false,
        redirectPage: '/news',
    },
    {
        id: '5',
        title: 'Контакти',
        isCurrent: false,
        redirectPage: undefined,
    }
]

const a = [1, 2, 3, 4];

const b = a.map(e => {
    return e * 2;
})

console.log(b.toString())
// @hs$76w65n

const navrbar = navbarElements.map((element, index) => {
    return (
        <div key={element.id}>
            <a href={element.redirectPage}>{element.title}</a>
        </div>
    )
})

const NavBareElements = () => {
    return (
        <React.Fragment>
            {
                navbarElements.map((element, index) => {
                    return (
                        <div key={element.id}>
                            <a href={element.redirectPage}>{element.title}</a>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

const COMMON_MARGIN = 20;

const CommonSizes = {
    xs: '5px',
    sm: '10px',
    md: `${COMMON_MARGIN}px`,
}

const NavElementStyled = styled.div`
  margin: ${CommonSizes.md};
`

const StyledLink = styled.a`
  color: antiquewhite;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`


const NavBar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (

        <>
            <div style={{backgroundColor: "#2d2d2d", width: '100%', display: 'flex'}}>
                <a style={{margin: CommonSizes.md}}>
                    SPORTS B<i>O</i>IKO
                </a>
                <div id="asdasdasdasdasd" style={{display: 'flex', flexDirection: 'row'}}>
                    <>
                        {
                            navbarElements.map((element, index) => {
                                return (
                                    <NavElementStyled key={element.id}>
                                        <StyledLink
                                            onClick={() => {
                                                if (!element.redirectPage) {
                                                    setIsOpen(true)
                                                }
                                            }}
                                            href={element.redirectPage}>
                                            {element.title}
                                        </StyledLink>
                                    </NavElementStyled>
                                )
                            })
                        }
                        {/*{*/}
                        {/*    navrbar*/}
                        {/*}*/}
                        {/*<NavBareElements/>*/}
                    </>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={() => {
                    console.log('AFRTER OPEN')
                }}
                onRequestClose={() => {
                    setIsOpen(false);
                }}
                style={{}}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={() => {
                    setIsOpen(false)
                }}>close
                </button>
                <div>I am a modal</div>
                <form>
                    <input/>
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </>
    )
}

export const App = () => {
    return (
        <Styled.Container>
            <Styled.StyledDiv>
                <NavBar/>
            </Styled.StyledDiv>
            <div style={{backgroundColor: 'blue', flex: 1}}>
                Hello
            </div>
            <Styled.StyledDiv>
                Hello
            </Styled.StyledDiv>
        </Styled.Container>
    );
}