import Link from "next/link";
import styled from "styled-components";

const StyledListContainer = styled.div`
  flex-grow: 2;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
`;

export default function MenuLink() {
  return (
    <StyledListContainer>
      <StyledUl>
        <h5>
          <Link href="/about">About me</Link>
        </h5>
      </StyledUl>
    </StyledListContainer>
  );
}
