import styled from "styled-components";
import { StyledDiv } from "./ContentContainer";

const FooterP = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;

const StyledA = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDivExtended = styled(StyledDiv)`
  margin-top: auto;
`;

export default function Footer() {
  return (
    <StyledDivExtended>
      <footer>
        <FooterP>
          Personal blog by{" "}
          <StyledA href="https://github.com/JeyRathnam">Jey</StyledA>
        </FooterP>
      </footer>
    </StyledDivExtended>
  );
}
