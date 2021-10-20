import styled from "styled-components";
import { darkTheme, lightTheme } from "../../theme";
import { StyledDiv } from './Styled/ContentContainer';

const StyledHeader = styled.header`
  display: flex;
  align-items: baseline;
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
`;

const StyledH4 = styled.h4`
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.link};
`;

const StyledListContainer = styled.div`
    flex-grow: 2;
`;

const StyledUl = styled.ul`
    display : flex;
    align-items : flex-start;
    padding : 0 1rem;
`;

const StyledButton = styled.button``;

function switchTheme(currentTheme) {
    return currentTheme.name === darkTheme.name ? lightTheme : darkTheme;
}

export default function Layout({ children, theme, setTheme }) {

    return (
        <StyledDiv>
            <StyledHeader>
                <StyledH1>Jey's Blog</StyledH1>
                <StyledListContainer>
                    <StyledUl>
                        <StyledH4>About me</StyledH4>

                    </StyledUl>
                </StyledListContainer>

                <StyledButton onClick={() => setTheme(switchTheme(theme))}>theme</StyledButton>
            </StyledHeader>
            {children}
        </StyledDiv>
    );
}
