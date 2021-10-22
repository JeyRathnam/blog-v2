import styled from "styled-components";
import { getAllPosts } from "../lib/postsHelper";
import PostTitleWithExcerpt from "./components/Post/PostTitleWithExcerpt";

const StyledP = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: ${({ theme }) => theme.fontWeights.subheading};
`;

export default function Index({ allPosts }) {
  console.log(allPosts);
  return (
    <>
      <title>Jey's personal blog</title>
      {allPosts.map(({ title, slug, excerpt }) => (
        <PostTitleWithExcerpt title={title} slug={slug} excerpt={excerpt} />
      ))}
    </>
  );
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
