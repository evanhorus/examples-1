import React from "react";
import {navbarElements} from "./data";
import {NavElementStyled, StyledLink} from "../App/styled";

export const NavBareElements: React.FC<{setIsOpen:Function}> = (props) => {
    return (
    <>
            {
                navbarElements.map((element, index) => {
                    return (
                        <NavElementStyled key={element.id}>
                            <StyledLink
                                onClick={() => {
                                    if (!element.redirectPage) {
                                        props.setIsOpen(true);
                                    }
                                }}
                                href={element.redirectPage}>
                                {element.title}
                            </StyledLink>
                        </NavElementStyled>
                    )
                })
            }
        </>
    )
}