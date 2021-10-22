import Link from "next/link";
import styled from "styled-components";
import { StyledDiv } from "../Styled/ContentContainer";
import PostTitle from "./PostTitle";

const StyledP = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.subheading};
`;

const StyledDivExtended = styled(StyledDiv)`
  margin: 0 auto 20px auto;
`;

export default function PostTitleWithExcerpt({ title, slug, excerpt }) {
  return (
    <StyledDivExtended>
      <PostTitle title={<Link href={`/posts/${slug}`}>{title}</Link>} />
      <StyledP>{excerpt}</StyledP>
    </StyledDivExtended>
  );
}
