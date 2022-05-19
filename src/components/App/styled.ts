import styled from "styled-components";
import {CommonSizes} from "./constants";

export const StyledDiv = styled.div`
  background-color: #e2f67e;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
  background-color: red;
`;

Container.displayName = 'Main Container';

const ModifiedContainer = styled(Container)`
  background-color: burlywood;
`

export const NavElementStyled = styled.div`
  margin: ${CommonSizes.md};
`

export const StyledLink = styled.a`
  color: antiquewhite;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const Styled = {
    StyledDiv,
    Container,
    ModifiedContainer,
};