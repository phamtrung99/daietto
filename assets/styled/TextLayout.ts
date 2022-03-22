import styled from "styled-components";

interface Props {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  margin?: string;
  hoverColor?: string;
}

const Text = styled.div<Props>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 16}rem` : "1rem")};
  color: ${({ color }) => color && `${color}`};
  font-weight: ${({ fontWeight }) => fontWeight && `${fontWeight}`};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
`;
export default Text;
