import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPosts, getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage({ post }) {
  // const { post } = post;

  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { postslug } = context.params;
  // const post = getPostData(postslug);
  // const post = getPostBySlug(postslug);
  const post = getPostData(postslug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const allPosts = getAllPosts();
  const allPostFiles = getPostsFiles();
  const pathNames = allPostFiles.map((post) => ({
    params: {
      postslug: post.replace(/\.md$/, ""),
    },
  }));
  console.log(`pathNames: `, pathNames);
  const paths = allPosts.map((posts) => ({
    params: {
      postslug: posts.slug,
    },
  }));
  console.log(`paths: `, paths);
  return {
    paths: pathNames,
    fallback: false,
  };
}
