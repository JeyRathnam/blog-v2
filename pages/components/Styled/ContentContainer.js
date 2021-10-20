import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.text.primary};
`;