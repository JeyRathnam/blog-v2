import styled from "styled-components";
import { StyledH1 } from "../Styled/ContentContainer";

const StyledPostTitle = styled.h1``;

export default function PostTitle({ title }) {
  return <StyledH1>{title}</StyledH1>;
}
