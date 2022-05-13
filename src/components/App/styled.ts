import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: yellow;
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

export const Styled = {
    StyledDiv,
    Container,
    ModifiedContainer,
}