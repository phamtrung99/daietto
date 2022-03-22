import styled, { css } from "styled-components";
interface Props {
  center?: boolean;
  full?: boolean;
  col?: boolean;
  between?: boolean;
  jusend?: boolean;
  flexend?: boolean;
  itemend?: boolean;
  flexStart?: boolean;
  itemcenter?: boolean;
  align?: boolean;
  around?: boolean;
  wraper?: boolean;
  position?: string;
}

const Flex = styled.div<Props>`
  display: flex;
  position: ${({ position }) => position};
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `};
  ${({ jusend }) =>
    jusend &&
    css`
      justify-content: flex-end;
      align-items: center;
    `};
  ${({ itemend }) =>
    itemend &&
    css`
      align-items: flex-end;
    `};
  ${({ itemcenter }) =>
    itemcenter &&
    css`
      align-items: center;
    `};
  ${({ flexend }) =>
    flexend &&
    css`
      justify-content: flex-end;
      align-items: flex-end;
    `};
  ${({ align }) =>
    align &&
    css`
      align-items: center;
    `};
  ${({ full }) =>
    full &&
    css`
      width: 100%;
      height: 100%;
    `};
  ${({ flexStart }) =>
    flexStart &&
    css`
      justify-content: flex-start;
    `};
  ${({ col }) =>
    col &&
    css`
      flex-direction: column;
    `};
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `};
  ${({ around }) =>
    around &&
    css`
      justify-content: space-around;
    `};
  ${({ wraper }) =>
    wraper &&
    css`
      flex-wrap: wrap;
    `};
`;
export default Flex;
