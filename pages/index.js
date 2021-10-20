import Link from "next/link";
import styled from "styled-components";
import { getAllPosts } from "../lib/postsHelper";
import { StyledDiv, StyledH1 } from "./components/Styled/ContentContainer";

const StyledP = styled.p`
  margin : 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.subheading};
`

export default function Index({ allPosts }) {
  console.log(allPosts);
  return (<>
    <title>Jey's personal blog</title>
    {allPosts.map((post) => (
      <StyledDiv>
        <StyledH1>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </StyledH1>
        <StyledP>{post.excerpt}</StyledP>
      </StyledDiv>
    ))}

  </>);
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
