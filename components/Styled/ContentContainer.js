import styled from "styled-components";
import { device } from "../../lib/device";

export const StyledDiv = styled.div`
  margin: 0 auto;
  color: ${({ theme }) => theme.text.primary};

  @media ${device.mobileL} {
    width: 90vw;
  }

  @media ${device.laptop} {
    width: 40vw;
  }
`;

export const StyledH1 = styled.h1`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;

export const StyledH2 = styled.h2`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;

export const StyledH4 = styled.h4`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.link};
`;

export default function dummy() {}
