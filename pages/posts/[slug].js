import { getAllPosts, getPostBySlug, markdownToHtml } from "../../lib/postsHelper";
import { StyledDiv } from "../components/Styled/ContentContainer";
import { StyledH2 } from "../components/Styled/StyledH2";


export default function FirstPost({ post }) {
    return (
        <StyledDiv>
            <title>
                {post.title}
            </title>
            <StyledH2>{post.title}</StyledH2>
            <>
                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </>
        </StyledDiv>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, ['slug', 'title', 'excerpt', 'date', 'content'])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}


export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}