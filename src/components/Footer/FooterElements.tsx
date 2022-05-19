import React from "react";
import {navbarMyTry2} from "../Footer/data";
import {NavElementStyled, StyledLink} from "../App/styled";


export const FooterElements: React.FC<{ setIsOpen: Function }> = (props) => {
    return (
        <>
            {
                navbarMyTry2.map((element, index) => {
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