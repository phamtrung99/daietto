import styled from "styled-components";
import Variables from "./Variables";

interface Props {
  color?: string;
  backgroundColor?: string;
  height?: string;
}

const HeaderBarLayout = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Variables.lightGray};
`;

export default HeaderBarLayout;
