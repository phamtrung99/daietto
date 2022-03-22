import styled from "styled-components";
import GridLayout from "./GridLayout";
import Variables from "./Variables";

const Container = styled.div`
  box-sizing: border-box;
  font-family: ${Variables.primaryFont};
  background-color: ${Variables.lightGray};
  width: 100%;
  height: 22rem;
  padding: 1rem 2rem;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Title = styled.div`
  color: ${Variables.primaryColor};
`;

const Item = styled(GridLayout.Col)``;

export default { Container, Title };
