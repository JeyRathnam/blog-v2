import { StyledDiv, StyledH1 } from "../../components/Styled/ContentContainer";
import {
  getAllPosts,
  getPostBySlug,
  markdownToHtml,
} from "../../lib/postsHelper";

export default function FirstPost({ post }) {
  console.log(post.title)
  return (
    <StyledDiv>
      <title>{post.title} - JeyR</title>
      <StyledH1>{post.title}</StyledH1>
      <>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </>
    </StyledDiv>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
