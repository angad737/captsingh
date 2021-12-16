import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../../dummydata/dummyPosts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage({ posts }) {
  console.log(`AllPostsPage: posts: ${posts}`);
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 300,
  };
}
