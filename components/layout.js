import styled from "styled-components";
import BlogTitle from "./Header/BlogTitle";
import DarkModeToggle from "./Header/DarkModeToggle";
import MenuLink from "./Header/MenuLink";
import { StyledDiv } from "./Styled/ContentContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: baseline;
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;

const StyledDivExtended = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children, theme, setTheme }) {
  return (
    <>
      <StyledDivExtended>
        <StyledHeader>
          <BlogTitle />
          <MenuLink />
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </StyledHeader>
        {children}
      </StyledDivExtended>
    </>
  );
}
