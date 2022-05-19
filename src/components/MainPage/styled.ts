import styled from "styled-components";

export const BigCircle = styled.div`
  margin: 10px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  cursor: pointer;
  background-color: rgba(26, 168, 221, 0.55);
  transition: all 0.5s 0s ease;
  &:hover{
    width: 180px;
    height: 180px;
    background-color: rgba(27, 104, 52, .7);
  }
`;

export const InnerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: bolder;
  color: white;
  transition: all 0.5s 0s ease;
  &:hover{
    font-size: 22px;

  }
`;